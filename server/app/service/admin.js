'use strict';

const Service = require('egg').Service;

// 管理员业务逻辑层
class AdminService extends Service {

    // 创建
    async create(payload) {
        const { ctx } = this;

        const { root } = ctx.state.user;
        // 权限
        if (root !== 1) {
            throw { status: 401, msg: '没有权限执行此操作' };
        }

        // 是否存在该用户
        let adminUser = await this.app.mysql.get("tb_admin",{ nickname: payload.nickname });

        if (adminUser) {
            throw { status: 412, msg: '账户已存在' };
        }

        // 密码加盐
        const hash = await ctx.genHash(payload.password);
        payload.password = hash;

        let result = await this.app.mysql.insert('tb_admin', payload);

        return result;
    }

    // 登陆
    async login(payload) {
        const { ctx, app } = this;

        // 校验账户
        let adminUser = await this.app.mysql.get("tb_admin",{ nickname: payload.nickname });

        if (!adminUser) {
            // 抛出异常 管理员不存在
            throw { status: 404, msg: '管理员账户不存在' };
        }

        // 校验密码
        const checked = await this.ctx.compare(payload.password, adminUser.password);
        if (!checked) {
            throw { status: 401, msg: '密码错误' };
        }

        // 给响应头设置一个 token
        const token = app.jwt.sign({
            nickname: adminUser.nickname,    //需要存储的 token 数据
            root: adminUser.root,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),     // 令牌有效期为 1小时
        }, app.config.jwt.secret);

        return {
            nickname: adminUser.nickname,
            token,
        };
    }


    // 认证
    async auth() {
        const { ctx } = this;
        const { nickname } = ctx.state.user;

        let adminUser = await this.app.mysql.get('tb_admin', { nickname });

        const userInfo = {
            nickname: adminUser.nickname,
            root: adminUser.root,
        }

        return userInfo;
    }

    // 更新
    async update(payload, _id) {
        const { ctx } = this;
        const { root } = ctx.state.user;

        if (root !== 1) {
            throw { status: 401, msg: '没有权限执行此操作' };
        }


        let result = await this.app.mysql.update('tb_admin', payload, {where: {_id: _id}});

        if (!result) {
            throw { status: 404, msg: '找不到这条记录' };
        }

        return result;
    }

    // 删除
    async delete(_id) {
        const { ctx } = this;
        const { root } = ctx.state.user;

        if (root !== 1) {
            throw { status: 401, msg: '没有权限执行此操作...' };
        }

        let result= await this.app.mysql.delete('tb_admin',{ _id });

        if (!result) {
            throw { status: 404, msg: '找不到这条记录...' };
        }

        return result;
    }

    // 获取管理员列表
    async getAdminList() {
        const { ctx } = this;

        let total = await this.app.mysql.query(`SELECT * FROM tb_admin`);

        return total;
    }

}

module.exports = AdminService;
