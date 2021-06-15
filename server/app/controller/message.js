'use strict';

const Controller = require('egg').Controller;

class MessageController extends Controller{

    // 增
    async create() {
        const { ctx, service } = this;

        // 从请求体中结构数据
        const { userName, email, phone, content } = ctx.request.body;

        const params = {
            user_name: userName,
            email,
            date: ctx.helper.getDate(),
            phone,
            content
        }

        const res = await service.message.create(params);

        ctx.helper.success({
            res,
            msg: '创建成功',
        })
    }

    // 删
    async delete() {
        const { ctx, service } = this;

        // 从请求体中解构_id
        const { _id } = ctx.params;

        const res = await service.message.delete(_id);

        ctx.helper.success({
            res,
            msg: '删除成功',
        })
    }

    // 查
    async detail() {
        const { ctx, service } = this;

        // 从请求体中解构_id
        const { _id } = ctx.params;

        const res = await service.message.detail(_id);
        ctx.helper.success({
            res,
            msg: '查询成功',
        })
    }

    // 获取列表
    async msgList() {
        const { ctx, service } = this;


        const res = await service.message.msgList();
        ctx.helper.success({
            res,
            msg: '删除成功',
            total: res.length
        })
    }
}

module.exports = MessageController;