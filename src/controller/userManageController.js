/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/controller/userManageController.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 17:52
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



const userManageService = require('../service/userManageService');

module.exports = {
    getUserList,
    getUserInfo
}

/******
 * @interface : 获取用户列表
 * @description : 查询系统中的所有用户
 * @method : POST
 * @param {*}
 * @return {*}
 */
async function getUserList(req, res, next) {
    const userList = await userManageService.getUserList();
    res.ResultVO(0, '获取用户列表成功', userList);
}

/******
 * @interface : 获取用户详细信息
 * @description : 查询当前用户的详细信息
 * @method : POST
 * @param {*}
 * @return {*}
 */
async function getUserInfo(req, res, next) {
    const userInfo = await userManageService.getUserInfo(req.body.userId);
    res.ResultVO(0, '获取获取用户信息成功', userInfo);
}
