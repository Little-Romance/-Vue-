'use strict';

const Service = require('egg').Service;

class CommentService extends Service{

    // 获取评论列表
    async commentList(_id) {
        const { ctx } = this;

        // 操作数据库
        let result = await this.app.mysql.select('tb_comment', { where: { fk_com_video: _id } });

        return result;
    }

    // 创建评论
    async create(payload) {
        const { ctx } = this;

        let result = await this.app.mysql.insert('tb_comment', payload);

        return result;
    }

    // 删除评论
    async delete(_id) {
        const { ctx } = this;
        let result= await this.app.mysql.delete('tb_comment', { _id });

        return result;
    }

    // 获取评论详情
    async detail(_id) {
        const { ctx } = this;
        let result = await this.app.mysql.select('tb_comment', { where: { _id } });

        return result;
    }
}

module.exports = CommentService;