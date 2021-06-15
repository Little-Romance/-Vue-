'use strict';

const Controller = require('egg').Controller;

class HotController extends Controller {
    // 创建
    async create() {
        const { ctx, service } = this;

        const payload = ctx.request.body;


        // 操作数据库
        const res = await service.hot.create(payload)



        // responds
        ctx.helper.success({
            res,
            msg: '创建成功',
        })

    }

    // 删除
    async deleteById() {
        const { ctx, service } = this;

        const { _id } = ctx.params;

        // 操作数据
        const res = await service.hot.delete(_id);

        ctx.helper.success({
            res,
            msg: '删除成功'
        })
    }

    // 查询
    async detailById() {
        const { ctx, service } = this;

        const { _id } = ctx.params;

        // 操作数据
        const res = await service.hot.detail(_id);

        ctx.helper.success({
            res,
            msg: '数据获取成功'
        })
    }

    // 更新
    async updateById() {
        const { ctx, service } = this;

        const { _id } = ctx.params;
        const payload = ctx.request.body;

        // 参数校验

        // 操作数据
        const res = await service.hot.update(_id, payload);

        ctx.helper.success({
            res,
            msg: '修改成功'
        })
    }

    // 获取列表
    async getHotList() {
        const { ctx, service } = this;

        // 从 url 中获取参数
        const { page_size=8, page_index=1, keyword='' } = ctx.query;

        const PAGE_SIZE = parseInt(page_size);
        const PAGE_INDEX = parseInt(page_index);

        const res = await service.hot.list(PAGE_SIZE, PAGE_INDEX, keyword);

        ctx.helper.success({
            msg: '数据获取成功',
            res: res.result,
            total: res.total,
        })

    }
}

module.exports = HotController;
