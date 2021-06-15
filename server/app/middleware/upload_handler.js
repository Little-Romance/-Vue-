
const path = require('path');
const fs = require('fs');

module.exports = (options, app) => {
    return async (ctx, next) => {
        for (const file of ctx.request.files) {

            // 获取临时文件数据
            const file_info = fs.readFileSync(file.filepath);

            // 处理文件名
            const file_name = file.filename;      // 精选1.jpg
            const suffix = file_name.split('.');      // 以点分割成数组，数组的最后一项就是后缀名
            const new_file_name = `gy_${new Date().getTime()}.${suffix[suffix.length - 1]}`;        // gy_1613657341828.jpg

            let file_path;
            let result;
            let file_url;
            try {
                // 把文件上传到本地文件夹
                switch (suffix[suffix.length - 1]) {
                    case 'jpg':
                    case 'jpeg':
                    case 'png':
                        file_path = path.join(options.dir + `/images/${new_file_name}`);
                        file_url = path.join('public/' + `/images/${new_file_name}`);
                        break;

                    case 'mp4':
                    default:
                        file_path = path.join(options.dir + `/videos/${new_file_name}`);
                        file_url = path.join('public/' + `/videos/${new_file_name}`);
                        break;
                }

                result =  await fs.writeFileSync(file_path, file_info);

                // 把文件路径信息存储到 ctx.state
                ctx.state = {
                    fileUrl: 'http://localhost:7001/' + file_url,
                    fileName: new_file_name,
                }

            } catch (e) {
                throw new Error(e);
            } finally {
                // 需要删除临时文件
                await fs.unlink(file.filepath, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('删除缓存文件:' + file.filepath + '成功！');
                });
            }
        }

        await next();
    }
}