'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller{

    // 创建评论
    async addComment() {
        const { ctx, service } = this;
        const { content, fk_com_video } = ctx.request.body;

        const payload = {
            content,
            fk_com_video,
            date: ctx.helper.getDate(),
        }

        console.log(payload);

        let res = service.comment.create(payload);

        ctx.helper.success({
            res,
            msg: '创建成功',
        })
    }

    // 获取评论
    async getComments() {
        const { ctx, service } = this;
        const { _id } = ctx.params;

        const res = await service.comment.commentList(_id);

        ctx.helper.success({
            res,
            msg: '获取成功',
            total: res.length
        })

    }

    // 获取评论详情
    async getCommentById() {
        const { ctx, service } = this;
        const { _id } = ctx.params;

        const res = await service.comment.detail(_id);

        ctx.helper.success({
            res,
            msg: '获取成功',
            total: res.length,
        })

    }

    // 删除评论
    async deleteComment() {
        const { ctx, service } = this;
        const { _id } = ctx.params;

        const res = await service.comment.delete(_id);
        ctx.helper.success({
            res,
            msg: '删除成功',
        })
    }
}

module.exports = CommentController;