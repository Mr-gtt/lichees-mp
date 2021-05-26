/*
 * @Author: your name
 * @Date: 2021-05-20 15:35:21
 * @LastEditTime: 2021-05-26 01:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\server\routes\index.route.js
 */

import express from 'express';
import config from '../../config/config.js';
import learning from './learning.route.js'
import sport from './sport.route.js'
import amuse from './amuse.route.js'


const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:${config.port}/api`);
});

router.use('/learning', learning);
router.use('/sport', sport);
router.use('/amuse', amuse);


export default router;