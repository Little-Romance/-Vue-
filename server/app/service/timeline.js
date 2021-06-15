
const Service = require('egg').Service;

class TimelineService extends Service {

    // 增
    async create(payload) {
        const { ctx } = this;

        // 操作数据库
        let result = await this.app.mysql.insert('tb_timeline', payload);

        if (!result) {
            throw new Error('上传失败')
        }

        return result;
    }

    // 删
    async delete(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.delete('tb_timeline', { _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 查
    async detail(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.get('tb_timeline',{ _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 改
    async update(_id, payload) {
        // 操作数据库
        let result = await this.app.mysql.update('tb_timeline', payload, {where: {_id: _id}});

        if (!result) {
            throw new Error('没有找到这条记录');
        }

        return result;
    }


    // 获取所有
    async list(PAGE_SIZE, PAGE_INDEX) {

        let result = await this.app.mysql.query(`SELECT * FROM tb_timeline ORDER BY _id DESC`);

        return result;
    }

}

module.exports = TimelineService;