
const Service = require('egg').Service;

class CarouselService extends Service {

    // 增
    async create(payload) {
        const { ctx } = this;

        let result = await this.app.mysql.insert('tb_carousel', payload);

        return result;
    }

    // 删
    async delete(_id) {
        const { ctx } = this;

        let result= await this.app.mysql.delete('tb_carousel',{ _id });

        if (!result) {
            throw new Error('没有这条记录');
        }
        return result;
    }

    // 查
    async detail(_id) {
        const { ctx } = this;

        let result= await this.app.mysql.get('tb_carousel',{ _id });

        if (!result) {
            ctx.status = 404;
            throw { status: 404, msg: '找不到记录...'};
        }

        return result;
    }

    // 改
    async update(_id, payload) {
        const { ctx } = this;

        let result = await this.app.mysql.update('tb_carousel', payload, {where: {_id: _id}});

        if (!result) {
            throw new Error('没有这条记录');
        }
        
        return result;
    }

    // 获取列表
    async list() {
        const { ctx } = this;
        let result = await this.app.mysql.query('SELECT * FROM tb_carousel');

        return result;
    }
}

module.exports = CarouselService;