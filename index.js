const express = require("express")

const connect = require("./config/db")

const app = express()

app.use(express.json())

const userController = require('./controller/user.controller')
const branchController = require('./controller/branch.controller')
const masterController = require('./controller/master.controller')
const savingController = require('./controller/saving.controller')
const fixedController = require('./controller/fixed.controller')


app.use("/user",userController)
app.use("/branch",branchController)
app.use("/master",masterController)
app.use("/saving",savingController)
app.use("/fixed",fixedController)





app.listen(6000,async ()=> {
    try{
        await connect()
        console.log("listening to 6000");
    }catch(err){
        console.log(err);
    }
})

