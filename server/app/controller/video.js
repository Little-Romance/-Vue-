'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
    // 创建
    async create() {
        const { ctx, service } = this;

        const payload = ctx.request.body;

        // 参数校验

        // 操作数据
        const res = await service.video.create(payload);

        ctx.helper.success({
            res,
            msg: '视频上传成功'
        })
    }

    // 删除
    async deleteById() {
        const { ctx, service } = this;

        const { _id } = ctx.params;

        // 操作数据
        const res = await service.video.delete(_id);

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
        const res = await service.video.detail(_id);

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
        const res = await service.video.update(_id, payload);

        ctx.helper.success({
            res,
            msg: '修改成功'
        })
    }

    // 获取列表
    async getVideoList() {
        const { ctx, service } = this;

        // 从 url 中获取参数
        const { page_size=12, page_index=1, label='' } = ctx.query;

        const PAGE_SIZE = parseInt(page_size);
        const PAGE_INDEX = parseInt(page_index);

        const res = await service.video.list(PAGE_SIZE, PAGE_INDEX, label);


        ctx.helper.success({
            res: res.result,
            total: res.total,
            msg: '数据获取成功'
        })
    }
}

module.exports = VideoController;
