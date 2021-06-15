'use strict';

const Service = require('egg').Service;

class Message extends Service{
    async create(payload) {

        // 操作数据库
        let result = await this.app.mysql.insert('tb_message', payload);

        return result;
    }

    async delete(_id) {
        // 操作数据库
        let result = await this.app.mysql.delete('tb_message', {_id});

        return result;
    }


    async detail(_id) {
        const { ctx } = this;
        let result= await this.app.mysql.get('tb_message',{ _id });


        return result;
    }

    async msgList() {
        const { ctx } = this;
        let result = await this.app.mysql.query(`SELECT * FROM tb_message`);

        return result;
    }
}

module.exports = Message;