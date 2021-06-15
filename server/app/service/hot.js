
const Service = require('egg').Service;

class HotService extends Service {

    // 增
    async create(payload) {
        const { ctx } = this;

        // 操作数据库
        let result = await this.app.mysql.insert('tb_hot', payload);

        if (!result) {
            throw new Error('创建失败')
        }

        return result;
    }

    // 删
    async delete(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.delete('tb_hot', { _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 查
    async detail(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.get('tb_hot',{ _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 改
    async update(_id, payload) {
        // 操作数据库
        let result = await this.app.mysql.update('tb_hot', payload, {where: {_id: _id}});

        if (!result) {
            throw new Error('没有找到这条记录');
        }

        return result;
    }


    // 获取所有
    async list(PAGE_SIZE, PAGE_INDEX, keyword) {

        let total = await this.app.mysql.query(`SELECT * from tb_hot`);

        const skip = (PAGE_INDEX - 1) * PAGE_SIZE;      // 需要跳过多少条数据
        let result = await this.app.mysql.query(`SELECT * FROM tb_hot where category like '%${keyword}%' limit ${skip}, ${PAGE_SIZE}`);

        return {
            result,
            total: total.length,
        };
    }

}

module.exports = HotService;