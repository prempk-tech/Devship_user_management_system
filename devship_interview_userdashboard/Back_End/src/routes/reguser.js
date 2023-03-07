const express = require('express')

const regusermodel = require('../models/reguser')

const router = express.Router();

router.post('/Addreguser', async (req, res) => {
    var reqdata = req.body;
    let finaldata = new regusermodel({
        firstname: reqdata.firstname,
        lastname: reqdata.lastname,
        email: reqdata.email,
        username: reqdata.username,
        password: reqdata.password,
        confirmpassword: reqdata.confirmpassword
    })

    try {
        let regdata = await finaldata.save()
        res.status(200).json({ 'status': 200, 'data': regdata, 'message': 'successfully posted', 'error': false })
    }
    catch (error) {
        res.status(400).json({ 'status': 400, 'message': error.message, 'error': true })
    }
})

module.exports = router;