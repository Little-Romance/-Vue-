const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class UtilController extends Controller {
    async captcha() {
        const { ctx, next } = this;
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            ignoreChars: 'Ooli',
            width: 100,
            height: 45,
            noise: 3,
            color: true,
            background: 'rgba(68, 160, 179, 0.1)',
        });
        ctx.session.captcha = captcha.text;
        ctx.response.type = 'image/svg+xml';
        ctx.body = captcha.data;
    }
}

module.exports = UtilController;