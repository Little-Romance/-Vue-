/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613545430670_9622';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 启用文件上传
  config.multipart = {
    mode: 'file',
    fileSize: '100mb',
    fileExtensions: [ '.txt' ], // 增加对 txt 扩展名的文件支持
  };


  // add egg-bcrpt
  exports.bcrypt = {
    saltRounds: 10    // 生成salt的迭代次数
  }

  // egg-jwt secret
  config.jwt = {  //jwt配置项
    secret: "guoyi"
  }

  // 配置校验器
  exports.validate = {
    convert: true,
    validateRoot: true,
  };

  // 暂时关闭 chrf
  config.security = {
    csrf: {
      enable: false
    }
  }

  // 配置session
  exports.session = {
    key: 'EGG_SESS',
    maxAge: 1000 * 6 * 10, // 1 分钟
    httpOnly: true,
    encrypt: true,
  };

  //  跨域
  config.cors = {
    // origin: 'http://localhost:8080',
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true // 支持cookie跨域
  };

  // 配置静态资源路径
  config.static = {
    prefix: '/public/',
    dir: appInfo.baseDir + '/app/public',
  }

  // 配置数据库
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'guoyi',

      // 时间格式
      timezone: "08:00"
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
