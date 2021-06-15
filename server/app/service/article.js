
const Service = require('egg').Service;

class ArticleService extends Service {

    // 增
    async create(payload) {
        const { ctx } = this;

        // 操作数据库
        let result = await this.app.mysql.insert('tb_article', payload);

        if (!result) {
            throw new Error('上传失败')
        }

        return result;
    }

    // 删
    async delete(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.delete('tb_article', { _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 查
    async detail(_id) {
        const { ctx } = this;

        // 操作数据库
        let result= await this.app.mysql.get('tb_article',{ _id });

        if (!result) {
            throw new Error('没有这条记录');
        }

        return result;
    }

    // 改
    async update(_id, payload) {
        // 操作数据库
        let result = await this.app.mysql.update('tb_article', payload, {where: {_id: _id}});

        if (!result) {
            throw new Error('没有找到这条记录');
        }

        return result;
    }


    // 获取所有
    async list(PAGE_SIZE, PAGE_INDEX, category) {

        const skip = (PAGE_INDEX - 1) * PAGE_SIZE;      // 需要跳过多少条数据
        let total = await this.app.mysql.query(`SELECT * from tb_article`);
        let result = await this.app.mysql.query(`SELECT * FROM tb_article where category like '%${category}%' order by _id desc limit ${skip}, ${PAGE_SIZE}`);

        return {
            total: total.length,
            result
        };
    }

}

module.exports = ArticleService;