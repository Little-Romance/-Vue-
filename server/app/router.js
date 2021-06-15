'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const uploadHandler = app.middleware.uploadHandler({ dir: app.config.static.dir });
  const check = app.middleware.codeHandler();

  // 管理员
  router.post('/api/v1/admin/register', app.jwt, controller.admin.create);
  router.post('/api/v1/admin/login', controller.admin.login);
  router.get('/api/v1/admin/auth', app.jwt, controller.admin.auth);
  router.put('/api/v1/admin/:_id', app.jwt, controller.admin.update);
  router.delete('/api/v1/admin/:_id', app.jwt, controller.admin.delete);
  router.get('/api/v1/admin', controller.admin.getAdminList);

  // 图形验证码
  router.get('/api/v1/util', controller.util.captcha);


  // 轮播图
  router.post('/api/v1/carousel', uploadHandler, controller.carousel.create);
  router.delete('/api/v1/carousel/:_id', controller.carousel.deleteById);
  router.get('/api/v1/carousel/:_id', controller.carousel.detailById);
  router.put('/api/v1/carousel/:_id', controller.carousel.updateById);
  router.get('/api/v1/carousel', controller.carousel.list);

  // 时间线
  router.post('/api/v1/timeline/', controller.timeline.create);
  router.delete('/api/v1/timeline/:_id', controller.timeline.deleteById);
  router.get('/api/v1/timeline/:_id', controller.timeline.detailById);
  router.put('/api/v1/timeline/:_id', controller.timeline.updateById);
  router.get('/api/v1/timeline', controller.timeline.getPhotoList);

  // 热门内容
  router.post('/api/v1/hot', controller.hot.create);
  router.delete('/api/v1/hot/:_id', controller.hot.deleteById);
  router.get('/api/v1/hot/:_id', controller.hot.detailById);
  router.put('/api/v1/hot/:_id', controller.hot.updateById);
  router.get('/api/v1/hot', controller.hot.getHotList);

  // 文章
  router.post('/api/v1/article/', controller.article.create);
  router.delete('/api/v1/article/:_id', controller.article.deleteById);
  router.get('/api/v1/article/:_id', controller.article.detailById);
  router.put('/api/v1/article/:_id', controller.article.updateById);
  router.get('/api/v1/article/', controller.article.getArticleList);

  // 视频
  router.post('/api/v1/video', controller.video.create);
  router.delete('/api/v1/video/:_id', controller.video.deleteById);
  router.get('/api/v1/video/:_id', controller.video.detailById);
  router.put('/api/v1/video/:_id', controller.video.updateById);
  router.get('/api/v1/video', controller.video.getVideoList);

  // 评论
  router.post('/api/v1/comment', controller.comment.addComment);
  router.get('/api/v1/comment/:_id', controller.comment.getComments);
  router.delete('/api/v1/comment/:_id', controller.comment.deleteComment);
  router.get('/api/v1/comment/detail/:_id', controller.comment.getCommentById);

  // 消息&&留言
  router.post('/api/v1/message', controller.message.create);
  router.delete('/api/v1/message/:_id', controller.message.delete);
  router.get('/api/v1/message/:_id', controller.message.detail);
  router.get('/api/v1/message', controller.message.msgList);

  // 获取后台导航菜单
  router.get('/api/v1/nav', controller.nav.getNavItem);

  // 处理文件上传
  router.post('/api/v1/upload', uploadHandler, controller.upload.upload);
};
