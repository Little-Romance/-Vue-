// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAdmin = require('../../../app/service/admin');
import ExportArticle = require('../../../app/service/article');
import ExportCarousel = require('../../../app/service/carousel');
import ExportComment = require('../../../app/service/comment');
import ExportHot = require('../../../app/service/hot');
import ExportMessage = require('../../../app/service/message');
import ExportNav = require('../../../app/service/nav');
import ExportTimeline = require('../../../app/service/timeline');
import ExportVideo = require('../../../app/service/video');

declare module 'egg' {
  interface IService {
    admin: AutoInstanceType<typeof ExportAdmin>;
    article: AutoInstanceType<typeof ExportArticle>;
    carousel: AutoInstanceType<typeof ExportCarousel>;
    comment: AutoInstanceType<typeof ExportComment>;
    hot: AutoInstanceType<typeof ExportHot>;
    message: AutoInstanceType<typeof ExportMessage>;
    nav: AutoInstanceType<typeof ExportNav>;
    timeline: AutoInstanceType<typeof ExportTimeline>;
    video: AutoInstanceType<typeof ExportVideo>;
  }
}
