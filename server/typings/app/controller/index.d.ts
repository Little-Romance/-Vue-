// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/controller/admin');
import ExportArticle = require('../../../app/controller/article');
import ExportCarousel = require('../../../app/controller/carousel');
import ExportComment = require('../../../app/controller/comment');
import ExportHot = require('../../../app/controller/hot');
import ExportMessage = require('../../../app/controller/message');
import ExportNav = require('../../../app/controller/nav');
import ExportTimeline = require('../../../app/controller/timeline');
import ExportUpload = require('../../../app/controller/upload');
import ExportUtil = require('../../../app/controller/util');
import ExportVideo = require('../../../app/controller/video');

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    article: ExportArticle;
    carousel: ExportCarousel;
    comment: ExportComment;
    hot: ExportHot;
    message: ExportMessage;
    nav: ExportNav;
    timeline: ExportTimeline;
    upload: ExportUpload;
    util: ExportUtil;
    video: ExportVideo;
  }
}
