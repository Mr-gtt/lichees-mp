/*
 * @Author: your name
 * @Date: 2021-05-20 15:30:05
 * @LastEditTime: 2021-05-26 18:41:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\config\config.js
 */


import dotenv from 'dotenv';
dotenv.config()

    const config = {
      version: process.env.VERSION, // 版本
      env: process.env.NODE_ENV,  // 開發模式
      port: process.env.PORT      //端口
    };
    // console.log(config);
    
export default config;