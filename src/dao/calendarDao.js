/**
 * @ProjectName : nodejs-express-demo
 * @Description : 一个基于 Node.js Express 框架构建的 RESTful API 入门 Demo 范例。
 * @FilePath : /src/dao/calendarDao.js
 * @Author : Seele.Clover
 * @Date : 2023-07-16 00:00
 * @LastEditors : ankeiko
 * @LastEditTime : 2023-08-26 22:12
 * @Copyright (c) 2023 by GDMU-NA, All Rights Reserved.
 */



const db = require('../utils/dbHelper_sqlite');

// 获取用户列表
exports.getSchoolCalendar = async () => {
    const sql = `
        SELECT academic_year,semester,which_week,which_day
        FROM school_calendar
    `;
    return await db.select(sql);
};//导出用箭头函数的语法来定义的异步函数getSchoolCalendar，使用SQL查询了 school_calendar 表中的部分字段，使用 db.select(sql) 方法执行查询，并将结果返回

// 获取用户详细信息
exports.getSchoolDate = async (date) => {
    const sql = `
        SELECT
            *
        FROM
            school_calendar
        WHERE
            date = ?
    `;
    const sqlParams = [
        date
    ];
    return await db.select(sql, sqlParams);
};//导出用箭头函数的语法来定义的异步函数getSchoolDate，使用SQL查询了 school_calendar 表中的部分字段，并使用 WHERE 子句来筛选出指定 date 的记录。使用 db.select(sql, sqlParams) 方法执行查询，并将结果返回
