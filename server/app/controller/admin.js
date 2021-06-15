'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    // 创建
    async create() {
        const { ctx, service } = this;
        const payload = ctx.request.body;
        // 参数校验

        // 权限校验

        const res = await service.admin.create(payload);
        ctx.helper.success({
            res,
            msg: '创建成功'
        })
    }

    // 登陆
    async login() {
        const { ctx, service } = this;
        const payload = ctx.request.body;

        // 参数校验

        const res = await service.admin.login(payload)

        ctx.helper.success({
            res,
            msg: '登陆成功'
        })
    }

    // 认证
    async auth() {
        const { ctx, service } = this;


        const res = await service.admin.auth()

        ctx.helper.success({
            res,
            msg: '认证成功'
        })
    }

    // 更新
    async update() {
        const { ctx, service } = this;

        const payload = ctx.request.body;       // 从请求体中获取数据
        const { _id } = ctx.params;

        const res = await service.admin.update(payload, _id)

        ctx.helper.success({
            res,
            msg: '更新成功'
        })
    }

    // 删除
    async delete() {
        const { ctx, service } = this;

        const { _id } = ctx.params;

        const res = await service.admin.delete(_id);

        ctx.helper.success({
            res,
            msg: '删除成功'
        })
    }

    // 获取管理员列表
    async getAdminList() {
        const { ctx, service } = this;
        const res = await service.admin.getAdminList();
        ctx.helper.success({
            res,
            total: res.length,
            msg: '获取成功'
        })
    }
}

module.exports = AdminController;
