'use strict';

const Controller = require('egg').Controller;

class CarouselController extends Controller {

    // 增加
    async create() {
        const { ctx, service } = this;

        const { fileName, fileUrl } = ctx.state;

        const payload = {
            file_name: fileName,
            img_url: fileUrl,
        }

        const res = await service.carousel.create(payload);
        ctx.helper.success({
            res,
            msg: '上传成功',
        })
    }

    // 删除
    async deleteById() {
        const { ctx, service } = this;
        const _id = ctx.params._id;

        const res = await service.carousel.delete(_id);
        ctx.helper.success({
            res,
            msg: '删除成功',
        })
    }

    // 查询
    async detailById() {
        const { ctx, service } = this;
        const _id = ctx.params._id;
        const res = await service.carousel.detail(_id);

        ctx.helper.success({
            res,
            msg: '数据获取成功',
        })
    }

    // 修改
    async updateById() {
        const { ctx, service } = this;
        const payload = ctx.request.body;
        const _id = ctx.params._id;
        const res = await service.carousel.update(_id, payload);

        ctx.helper.success({
            res,
            msg: '更新成功',
        })
    }

    // 获取列表
    async list() {
        const { ctx, service } = this;
        const res = await service.carousel.list();

        ctx.helper.success({
            res,
            msg: '获取数据成功',
        })
    }
}

module.exports = CarouselController;
