/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/route/userManageRoute.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 20:18
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



const router = require('express').Router();
const userManageController = require('../controller/userManageController');

module.exports = router;

router.post('/getUserList', userManageController.getUserList);
router.post('/getUserInfo', userManageController.getUserInfo);
