module.exports = {

    success: function ({msg = '请求成功', res = null, total = 0}) {
        // this指的就是helper对象
        // this.ctx  context对象
        // this.app application对象

        this.ctx.status = 200;
        this.ctx.body = {
            status: 200,
            msg,
            data: res,
            total,

        }

    },

    rejected: function ({request, status, msg = '请求失败'}) {
        this.ctx.body = {
            request,
            status,
            msg
        }
    },

    getDate: function () {
        const date = new Date();
        const yy = date.getFullYear();
        const mm = date.getMonth();
        const dd = date.getDate();
        return `${yy}-${mm+1}-${dd}`;
    }
}

