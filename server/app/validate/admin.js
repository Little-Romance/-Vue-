
module.exports = app => {

    const { validator } = app;

    // 校验用户名是否正确
    validator.addRule('nickname', (rule, value) => {
        if (!value) {
            throw new Error('账号为空');
        }
    })
}