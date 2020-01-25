const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const saltRounds = 10
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type:String,
        trim: true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    firstname:{
        type:String,
        maxlength: 50
    },
    lastname:{
        type:String,
        maxlength: 50
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number,

    }

})

userSchema.pre('save',function (next)){
    var user = this
    bcrypt.genSalt(saltRounds,function(err,salt)){
        if(err) return next(err)

        bcrypt.hash()
    }
}


const User = mongoose.model('user',userSchema)

module.exports={User}