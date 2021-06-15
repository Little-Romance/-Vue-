'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    // 创建
    async create() {
        const { ctx, service } = this;

        const payload = ctx.request.body;

        // 参数校验

        // 操作数据
        const res = await service.article.create(payload);

        ctx.helper.success({
            res,
            msg: '文章创建成功'
        })
    }

    // 删除
    async deleteById() {
        const { ctx, service } = this;

        const { _id } = ctx.params;

        // 操作数据
        const res = await service.article.delete(_id);

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
        const res = await service.article.detail(_id);

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
        const res = await service.article.update(_id, payload);

        ctx.helper.success({
            res,
            msg: '修改成功'
        })
    }

    // 获取列表
    async getArticleList() {
        const { ctx, service } = this;

        // 从 url 中获取参数
        const { page_size=8, page_index=1, category='' } = ctx.query;

        const PAGE_SIZE = parseInt(page_size);
        const PAGE_INDEX = parseInt(page_index);

        const res = await service.article.list(PAGE_SIZE, PAGE_INDEX, category);

        // 处理分页

        ctx.helper.success({
            msg: '数据获取成功',
            res: res.result,
            total: res.total,
        })
    }
}

module.exports = ArticleController;
