/*
 * @Author: your name
 * @Date: 2021-05-21 00:07:26
 * @LastEditTime: 2021-05-26 01:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\server\controllers\learning.controller.js
 */

import modelCtrl from '../modules/helper/modelCtrl.js'
import resModel from '../modules/res.module';

const sportGet = (req, res) => {
    let page = req.query.pape
    let loca = req.query.loca
    let personnum = req.query.personnum
    let filter = {}
    if(loca){filter.loca = loca}
    if(personnum){
        filter.personnum = personnum
    }
    // if(loca){filter.loca = loca}
    modelCtrl.find(resModel.resSportModel,page,filter)
    .then((result) => {
        res.status(200)
        .json(result.data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const sportPost = (req, res) => {
    const data = req.body;
    modelCtrl.create(resModel.resSportModel,data)
    .then((result) => {
        res.status(200)
        .json(result.id)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const sportPut = (req, res) => {
    let id = req.params.id
    let data = req.body;
    modelCtrl.updateById(resModel.resSportModel,id,data)
    .then((result) => {
        res.status(200)
        .json(result.updated)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const sportDelete = (req, res) => {
    let id = req.params.id
    modelCtrl.deleteById(resModel.resSportModel,id)
    .then((result) => {
        res.status(200)
        .json(result.deleted)
    })
    .catch((err)=>{
        res.send(err)
    })
}



export default{
    sportGet,
    sportPost,
    sportPut,
    sportDelete
}