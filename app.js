/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /app.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 17:47
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



// 定义 Node Express 服务器
const express = require('express');
const app = express();

// 设置允许跨域访问
const cors = require('cors');
app.use(
    cors({
        origin: '*',
        methods: ['GET','POST']
    })
);
// 将请求体解析为 JSON
app.use(express.json());
// 错误处理
app.use(require('./src/middleware/errorHandler'));
// 响应格式化
app.use(require('./src/middleware/responseFormat'));



// 路由规则
app.use('/api/calendar', require('./src/route/calendarRoute'));



// 导入服务器配置
const server_conf = require('config').get('serverConfig');
// 启动服务器
const server = app.listen(server_conf.port || 33001, server_conf.host || '127.0.0.1', () => {
    console.log('Server running at http://%s:%s', server_conf.host, server_conf.port);
    console.log('Environment=%s', process.env.NODE_ENV);
})
