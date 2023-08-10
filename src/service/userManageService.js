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



const userManageDao = require('../dao/userManageDao');//声明常数加载这个路径

// 获取用户列表
exports.getUserList = async () => {
    const userList = await userManageDao.getUserList();
    return userList;
}//使用了箭头函数的语法来定义一个异步函数，调用 userManageDao.getUserList() 来获取用户列表数据，并将结果返回

// 获取用户详细信息
exports.getUserInfo = async (userId) => {
    const userInfo = await userManageDao.getUserInfo(userId);
    return userInfo;
}//使用了箭头函数的语法来定义一个异步函数，调用 userManageDao.getUserInfo(userId) 来获取用户列表数据，并将结果返回

