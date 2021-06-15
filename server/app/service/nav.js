const Service = require('egg').Service;

class NavService extends Service {

    // 增
    async getNavItem() {
        const {ctx} = this;

        let result = [];

        // 操作数据库
        // 获取一级菜单
        let menuItem = await this.app.mysql.query('SELECT * FROM tb_nav');

        for (const row of menuItem) {
            let { _id, title, icon } = row;

            // 通过 _id 获取二级菜单
            let subMenus = await this.app.mysql.query(`SELECT name, path from tb_nav INNER JOIN tb_sub_nav on tb_nav._id = tb_sub_nav.nav2subnav WHERE tb_nav._id = ${_id}`)

            result.push({
                _id: _id.toString(),
                title,
                icon,
                subMenus,
            })
        }


        if (!result) {
            throw new Error('获取数据失败')
        }

        return result;
    }

}

module.exports = NavService;