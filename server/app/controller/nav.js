'use strict';

const Controller = require('egg').Controller;

class NavController extends Controller {
    // 创建
    async getNavItem() {
        const { ctx, service } = this;


        const res = await service.nav.getNavItem();

        ctx.helper.success({
            res,
            msg: '获取成功'
        })

    }

}

module.exports = NavController;
