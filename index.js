/*
 * @Author: your name
 * @Date: 2021-05-20 15:27:34
 * @LastEditTime: 2021-05-20 16:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\index.js
 */
import config from './src/config/config.js';
import app from './src/config/express.js';


  app.listen(config.port, () => {
    console.log(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
  });


export default app;