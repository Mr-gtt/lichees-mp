/*
 * @Author: your name
 * @Date: 2021-05-20 15:42:24
 * @LastEditTime: 2021-05-21 00:50:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\server\routes\course.route.js
 */

import express from 'express';
import learningCtrl from '../controllers/learning.controller.js';

const router = express.Router();

router.get('/',learningCtrl.learingGet)
router.post('/',  learningCtrl.learingPost) //* auth token
router.put('/:id', learningCtrl.learingPut) //* auth token
router.delete('/:id',  learningCtrl.learingDelete) //* auth token

export default router;