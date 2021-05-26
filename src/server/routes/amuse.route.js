/*
 * @Author: your name
 * @Date: 2021-05-20 15:42:24
 * @LastEditTime: 2021-05-26 01:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\server\routes\course.route.js
 */

import express from 'express';
import amuseCtrl from '../controllers/amuse.controller.js';

const router = express.Router();

router.get('/',amuseCtrl.amuseGet)
router.post('/',  amuseCtrl.amusePost) //* auth token
router.put('/:id', amuseCtrl.amusePut) //* auth token
router.delete('/:id',  amuseCtrl.amuseDelete) //* auth token

export default router;