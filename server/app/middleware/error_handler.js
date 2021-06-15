module.exports = (options, app) => {
    return async (ctx, next) => {
        try {
            await next();
        } catch (error) {

            // 所有的异常都在app上触发一个error的事件，框架会记录一条错误日志
            app.emit('error', error, this);
            const status = error.status || 500;
            // 生成环境下 错误处理  500状态一般不会给到前端 因为会存在敏感信息
            const err = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : error.message

            // 401 权限错误
            if (status === 401) {
                ctx.status = 401;
                ctx.helper.rejected({
                    request: `${ctx.method} ${ctx.path}`,
                    status: status,
                    msg: error.msg || '当前登陆令牌已失效, 请重新登陆'
                })
                return ;
            }

            // 404 找不到
            if (status === 404) {
                ctx.status = 404;
                ctx.helper.rejected({
                    request: `${ctx.method} ${ctx.path}`,
                    status: status,
                    msg: error.msg || '找不到数据...'

                })
                return ;
            }

            // 412 已存在
            if (status === 412) {
                ctx.status = 412;
                ctx.helper.rejected({
                    request: `${ctx.method} ${ctx.path}`,
                    status: status,
                    msg: error.msg || '已存在'
                })
            }

        }
    }
}