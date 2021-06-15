
const Service = require('egg').Service;

class VideoService extends Service {

    // 增
    async create(payload) {
        const { ctx } = this;

        // 操作数据库
        let result = await this.app.mysql.insert('tb_video', payload);

        if (!result) {
            throw new Error('上传失败')
        }

        return result;
    }

    // 删
    async delete(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.delete('tb_video', { _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 查
    async detail(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.get('tb_video',{ _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 改
    async update(_id, payload) {
        // 操作数据库
        let result = await this.app.mysql.update('tb_video', payload, {where: {_id: _id}});

        if (!result) {
            throw new Error('没有找到这条记录');
        }

        return result;
    }


    // 获取所有
    async list(PAGE_SIZE, PAGE_INDEX, label) {

        let total = await this.app.mysql.query(`SELECT * FROM tb_video`);

        const skip = (PAGE_INDEX - 1) * PAGE_SIZE;      // 需要跳过多少条数据
        let result = await this.app.mysql.query(`SELECT * FROM tb_video where label like '%${label}%' limit ${skip}, ${PAGE_SIZE};`);

        return {
            total: total.length,
            result
        };
    }

}

module.exports = VideoService;