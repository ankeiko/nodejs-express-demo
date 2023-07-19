/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /app.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-16 00:00
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



// 错误处理中间件
const errorHandler = (err, req, res, next) => {
    // 处理错误并返回适当的响应
    console.error(err);
    res.status(500).json({
        code: err.code,
        message: err.name,
        error: err.text,
    });
};

module.exports = errorHandler;
