// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCodeHandler = require('../../../app/middleware/code_handler');
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportUploadHandler = require('../../../app/middleware/upload_handler');

declare module 'egg' {
  interface IMiddleware {
    codeHandler: typeof ExportCodeHandler;
    errorHandler: typeof ExportErrorHandler;
    uploadHandler: typeof ExportUploadHandler;
  }
}
