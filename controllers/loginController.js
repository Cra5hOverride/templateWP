const Login = require('../models/login');

module.exports = {

    index: async (req, res) => {
        return res.render('login');
    },

    login: async (req, res) => {
        let {
            username,
            password
        } = req.body;

        let loginData = await Login.findOne({
            user: username,
            password:password
        });

        if(username === "" && password === ""){
            return res.redirect('/');
        }
        

        if (loginData) {
        
                return res.render('result',{
                    doctype: loginData.doctype,
                });
        }

        res.flash('<span uk-icon="icon: warning"></span> ไม่พบข้อมูลผู้ใช้งาน!!', 'danger');
        res.redirect('/');
    },





}