'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
    // 创建
    async upload() {
        const { ctx, service } = this;

        const { fileUrl } = ctx.state;

        ctx.body = {
            fileUrl,
            msg: '上传成功',
        }
    }

}

module.exports = UploadController;
