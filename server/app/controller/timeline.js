'use strict';

const Controller = require('egg').Controller;

class TimelineController extends Controller {
    // 创建
    async create() {
        const { ctx, service } = this;

        // 从请求体中获取数据
        const payload = ctx.request.body;

        // 验证参数

        const res = await service.timeline.create(payload);


        ctx.helper.success({
            res,
            msg: '创建时间节点成功',
        })

    }

    // 删除
    async deleteById() {
        const { ctx, service } = this;

        // 获取 _id
        const { _id } = ctx.params;

        const res = await service.timeline.delete(_id);

        // 响应
        ctx.helper.success({
            res,
            msg: '删除时间节点成功',
        })

    }

    // 查询
    async detailById() {
        const { ctx, service } = this;

        // 获取 _id
        const { _id } = ctx.params;

        const res = await service.timeline.detail(_id);

        // 响应
        ctx.helper.success({
            res,
            msg: '获取节点事件成功',
        })
    }

    // 更新
    async updateById() {
        const { ctx, service } = this;

        // 获取 _id
        const { _id } = ctx.params;

        // 从请求体中获取数据
        const payload = ctx.request.body;

        // 验证参数

        const res = await service.timeline.update(_id, payload);

        ctx.helper.success({
            res,
            msg: '更新时间节点成功',
        })
    }

    // 获取列表
    async getPhotoList() {

        const { ctx, service } = this;

        const res = await service.timeline.list();

        ctx.helper.success({
            res,
            msg: '获取节点成功',
        })
    }
}

module.exports = TimelineController;
