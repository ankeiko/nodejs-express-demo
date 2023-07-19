/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/dao/userManageDao.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 19:49
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



const db = require('../utils/dbHelper_sqlite');

// 获取用户列表
exports.getUserList = async () => {
    const sql = `
        SELECT
            *
        FROM
            user_info
    `;
    return await db.select(sql);
};

// 获取用户详细信息
exports.getUserInfo = async (userId) => {
    const sql = `
        SELECT
            *
        FROM
            user_info
        WHERE
            user_id = ?
    `;
    const sqlParams = [
        userId
    ];
    return await db.select(sql, sqlParams);
};
