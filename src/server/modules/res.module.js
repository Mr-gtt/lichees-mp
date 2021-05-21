/*
 * @Author: your name
 * @Date: 2021-05-20 23:05:53
 * @LastEditTime: 2021-05-21 01:17:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\server\modules\yue_study.model.js
 */
import db from './connectdb.js';
const resLearningModel = db.collection('res_learning')
const resSportModel = db.collection('res_sport')
const resAmuseModel = db.collection('res_amuse')

export {
    resLearningModel,
    resSportModel,
    resAmuseModel
}