
const express = require('express');
const router =express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

//const bcrypt = require('bcrypt');

//this grabs the information that the user entered and changes the schema inputs so that data is ent to the mongodb database
router.post('/signup', (request, response)=>{
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })

    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
    
})

module.exports = router;

