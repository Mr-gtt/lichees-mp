/*
 * @Author: your name
 * @Date: 2021-05-20 15:42:24
 * @LastEditTime: 2021-05-26 01:42:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\server\routes\course.route.js
 */

import express from 'express';
import sportCtrl from '../controllers/sport.controller.js';

const router = express.Router();

router.get('/',sportCtrl.sportGet)
router.post('/',  sportCtrl.sportPost) //* auth token
router.put('/:id', sportCtrl.sportPut) //* auth token
router.delete('/:id',  sportCtrl.sportDelete) //* auth token

export default router;