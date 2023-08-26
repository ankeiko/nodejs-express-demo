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



const userManageService = require('../service/userManageService');//声明常数加载这个路径

module.exports = {
    getUserList,
    getUserInfo
}//导出两个路由接口

/******
 * @interface : 获取用户列表
 * @description : 查询系统中的所有用户
 * @method : POST //HTTP方法
 * @param {*} //这个接口接受一个参数，参数类型可以是任意类型。 
 * @return {*}//这个接口的返回值类型是任意类型。
 */
async function getUserList(req, res, next) {
    const userList = await userManageService.getUserList();
    res.ResultVO(0, '获取用户列表成功', userList);
} /*1、用async声明一个getUserList异步函数，调用 userManageService.getUserList() 来获取用户列表数据，并将结果赋值给 userList 变量
       这里的 res 参数是Express框架中的响应对象，通过调用 ResultVO 方法来返回结果给客户端。
*/
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
}/*1、用async声明一个getUserInfo异步函数，调用 userManageService.getUserInfo(req.body.userId) 来获取指定用户的详细信息，并将结果赋值给 userInfo 变量
       这里的 res 参数是Express框架中的响应对象，通过调用 ResultVO 方法来返回结果给客户端。
*/