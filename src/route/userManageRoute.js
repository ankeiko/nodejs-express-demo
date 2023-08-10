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



const router = require('express').Router(); // 导入web服务器，创建路由器对象
const userManageController = require('../controller/userManageController');//声明常数加载这个路径

module.exports = router; //向外挂转对象

router.post('/getUserList', userManageController.getUserList);// 获取用户列表
router.post('/getUserInfo', userManageController.getUserInfo);// 获取用户信息
