const express = require("express")
const Saving = require("../models/saving.model")
const Master = require("../models/master.model")

const router = express.Router()

router.post('',async(req,res)=>{
    const save = await Saving.create(req.body)
    const master = await Master.findById(req.body.masterId).lean().exec()
    master.Balance+=req.body.balance
    let a = await Master.findByIdAndUpdate(req.body.masterId,master,{new:true}).lean().exec()
    // console.log(master);
    return res.send(save)
})
module.exports = router