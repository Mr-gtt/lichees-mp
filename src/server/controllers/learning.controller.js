/*
 * @Author: your name
 * @Date: 2021-05-21 00:07:26
 * @LastEditTime: 2021-05-21 01:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\server\controllers\learning.controller.js
 */
import learing from '../modules/helper/learning.js'

const learingGet = (req, res) => {
    let page = req.query.pape
    let loca = req.query.loca
    let personnum = req.query.personnum
    let filter = {}
    if(loca){filter.loca = loca}
    if(personnum){filter.personnum = personnum}
    // if(loca){filter.loca = loca}
    learing
    .findLearing(page,filter)
    .then((result) => {
        res.status(200)
        .json(result.data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const learingPost = (req, res) => {
    const data = req.body;
    learing.createLearing(data)
    .then((result) => {
        res.status(200)
        .json(result.id)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const learingPut = (req, res) => {
    let id = req.params.id
    let data = req.body;
    learing.updateLearingById(id,data)
    .then((result) => {
        res.status(200)
        .json(result.updated)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const learingDelete = (req, res) => {
    let id = req.params.id
    learing.deleteLearingById(id)
    .then((result) => {
        res.status(200)
        .json(result.deleted)
    })
    .catch((err)=>{
        res.send(err)
    })
}



export default{
    learingGet,
    learingPost,
    learingPut,
    learingDelete
}