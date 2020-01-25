const express = require('express')
const app =express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')
const {User}=require('./model/user')

mongoose.connect(config.mongoURI,{ useNewUrlParser: true },)
.then(()=>console.log('DB connected'))
.catch(err=>console.log(err))

app.get('/', (req,res)=>{
    res.send('Hello from server')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())


app.post('/api/users/register',(req,res)=>{
   const user = new User(req.body)
    user.save((err, userData)=>{
        if(err) return res.json({success:true,err})
    })

    return res.status(200).json({
        success:true
    })
})



app.listen(5000,()=>console.log('Server started'))