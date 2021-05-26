/*
 * @Author: your name
 * @Date: 2021-05-20 23:29:59
 * @LastEditTime: 2021-05-26 01:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\server\modules\helper\learning.js
 */

/***
 * function:findLearing
 * @param {Object} Model
 * @param {Number} page 数据Learning的页数
 * @param {Object} filter 过滤器
 * 
 * @return {Promise} 返回数据result
 */

const find = (Model,page=1,filter={}) =>{
    let listSize = 15;
    return new Promise((resolve, reject) => {
        Model
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
 * @param {Object} Model
 * @param {Object} newData 新增的数据
 * 
 * @return {Promise} 返回数据result
 */

const create = (Model,newData) =>{
    return new Promise((resolve, reject) => {
        Model
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
 * @param {Object} Model
 * @param {String} _id 更新文档的id
 * @param {Object} updateData 更新的数据
 * 
 * @return {Promise} 返回数据result
 */

const updateById = (Model,_id,updateData) =>{
    return new Promise((resolve, reject) => {
        Model
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
 * @param {Object} Model
 * @param {String} _id 删除的文档的id
 * 
 * @return {Promise} 返回数据result
 */

const deleteById = (Model,_id) =>{
    return new Promise((resolve, reject) => {
        Model
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
    find,
    create,
    updateById,
    deleteById

}