const mongoose = require('mongoose');
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
//this is the schema (the information we want from our users)
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
});

//module.exports = mongoose.model('mytable', signUpTemplate);

//authenticate user and allows them to move around the page without logging out

/*signUpTemplate.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"});
    return token;
}
*/

const validate = (data) =>{
    const schema = joi.object({
        fullName:joi.string().required().label("Full Name"),
        username:joi.string().required().label("Username"),
        email:joi.string().email().required().label("Email"),
        password:passwordComplexity.required().label("Password")
    })
    return schema.validate(data);
}


module.exports = mongoose.model("user", signUpTemplate);