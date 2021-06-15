module.exports = (options, app) => {
    return async (ctx, next) => {
        const { code } = ctx.request.body;
        const captcha = ctx.session.captcha;

        if (code.toUpperCase() !== captcha.toUpperCase()){
            ctx.status = 403;
            ctx.helper.rejected({
                request: `${ctx.path} ${ctx.method}`,
                status: 403,
                msg: '验证码错误'
            })
            return ;
        }
        await next();
    }
}