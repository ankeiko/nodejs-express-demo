/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/service/userManageService.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 18:29
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



const userManageDao = require('../dao/userManageDao');

// 获取用户列表
exports.getUserList = async () => {
    const userList = await userManageDao.getUserList();
    return userList;
}

// 获取用户详细信息
exports.getUserInfo = async (userId) => {
    const userInfo = await userManageDao.getUserInfo(userId);
    return userInfo;
}
