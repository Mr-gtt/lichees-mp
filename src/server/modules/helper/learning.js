/*
 * @Author: your name
 * @Date: 2021-05-20 23:29:59
 * @LastEditTime: 2021-05-21 01:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\server\modules\helper\learning.js
 */
import {resLearningModel} from '../res.module.js'

/***
 * function:findLearing
 * @param {Number} page 数据Learning的页数
 * @param {Object} filter 过滤器
 * 
 * @return {Promise} 返回数据result
 */

const findLearing = (page=1,filter={}) =>{
    let listSize = 15;
    return new Promise((resolve, reject) => {
        resLearningModel
        .where(filter)
        .skip((page-1)*listSize)
        .limit(listSize)
        .get()
        .then((result) =>{
            resolve(result);
            console.log("find res_learning:"+result);
        })
        .catch((err) => {
            reject(err);
        })        
    });
    
}

/***
 * function:findLearing
 * @param {Object} newData 新增的数据
 * 
 * @return {Promise} 返回数据result
 */

const createLearing = (newData) =>{
    return new Promise((resolve, reject) => {
        resLearningModel
        .add(newData)
        .then((result) =>{
            resolve(result);
            console.log("create res_learning:"+result);
        })
        .catch((err) => {
            reject(err);
        })        
    });
    
}

/***
 * function:findLearing
 * @param {String} _id 更新文档的id
 * @param {Object} updateData 更新的数据
 * 
 * @return {Promise} 返回数据result
 */

const updateLearingById = (_id,updateData) =>{
    return new Promise((resolve, reject) => {
        resLearningModel
        .where({_id : _id})
        .update(updateData)
        .then((result) =>{
            resolve(result);
            console.log("find res_learning:"+result);
        })
        .catch((err) => {
            reject(err);
        })        
    });
}

/***
 * function:findLearing
 * @param {String} _id 删除的文档的id
 * 
 * @return {Promise} 返回数据result
 */

const deleteLearingById = (_id) =>{
    return new Promise((resolve, reject) => {
        resLearningModel
        .doc(_id)
        .remove()
        .then((result) =>{
            resolve(result);
            console.log("find res_learning:"+result);
        })
        .catch((err) => {
            reject(err);
        })        
    });
    
}

export default {
    findLearing,
    createLearing,
    updateLearingById,
    deleteLearingById

}