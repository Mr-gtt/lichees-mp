/*
 * @Author: your name
 * @Date: 2021-05-20 17:54:20
 * @LastEditTime: 2021-05-21 12:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\config\cloudbase.js
 */



import tcb from '@cloudbase/node-sdk';
// 初始化资源

import dotenv from 'dotenv';
dotenv.config()

// 云函数下不需要secretId和secretKey。
// env如果不指定将使用默认环境
const cloud1 = tcb.init({
    // secretId:"AKIDKo1zf4C4fz2oJYWCcleGchV2HG1VifLk",
    // secretKey:"92ez4sPecJktlMgjUyB8ohKhncASTDfq",
    env: process.env.CB_ENV,
    
});


//修改请求超时时间
// const cloud1 = tcb.init({
//   timeout: 5000
// });

//使用多个环境
//初始化环境'xx'和'zz'
// const app1 = tcb.init({
//   env: "xx"
// });

// const app2 = tcb.init({
//   env: "zz"
// });

export default cloud1;