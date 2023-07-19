/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/utils/dbHelper_sqlite.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : Seele.Clover
 * @LastEditTime : 2023-07-19 20:05
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



// 打开数据库文件
const sqlite = require('better-sqlite3');
const e = require('cors');
const db_file = new sqlite('db-sqlite.db', {
    readonly: false, // 以只读模式打开数据库连接
    fileMustExist: false, // 如果数据库不存在，将抛出异常而不是创建新文件
    verbose: console.log // 提供一个函数，该函数与数据库连接执行的每个 SQL 字符串一起调用
});

// 封装 SELECT 操作
exports.select = async (sql, sqlParams) => {
    try {
        const stmt = db_file.prepare(sql);
        const result = sqlParams ? stmt.all(sqlParams) : stmt.all();
        return result;
    } catch (err) {
        return err;
    }
}
