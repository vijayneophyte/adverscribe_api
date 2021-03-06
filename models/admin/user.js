/**
 * Created by Vijay on 27-Jun-17.
 */
var dbhandler = require('../../handlers/dbhandler');
var config = require('../../config/index')

var user = {

    addUser:function (req,res) {

        var email = req.body.email;
        var name = req.body.name;
        var role = req.body.role;

        var userData = {
            email:email,
            name:name,
            role:role
        }

        dbhandler.addUser(userData).then(function (user) {
            return res.json(user)
        },function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Fail To Add User',
                msg: errMsg
            });
        });
    },
    getUsers:function (req,res) {
        dbhandler.getUsers().then(function (users) {
            return res.json(users)
        },function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Fail To Get Users',
                msg: errMsg
            });
        });
    },
}

module.exports = user