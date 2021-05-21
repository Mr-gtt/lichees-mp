/*
 * @Author: your name
 * @Date: 2021-05-20 15:30:43
 * @LastEditTime: 2021-05-20 17:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\config\express.js
 */

import express from 'express';
import config from './config.js';
import indexApi from '../server/routes/index.route.js';
import morgan from 'morgan';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
/* GET home page. */
app.get('/', (req, res) => {
    res.send(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
});

app.use('/api', indexApi);


export default app;