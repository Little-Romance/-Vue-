'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    static: {
        enable: true,
    },

    mysql: {
        enable: true,
        package: 'egg-mysql',
    },

    validate: {
        enable: true,
        package: 'egg-validate',
    },

    bcrypt: {
        enable: true,
        package: 'egg-bcrypt'
    },

    jwt: {
        enable: true,
        package: 'egg-jwt',
    },

    cors: {
        enable: true,
        package: 'egg-cors'
    }
};
