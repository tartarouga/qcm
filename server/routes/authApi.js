var express = require("express");
var router = express.Router();
var User = require("./../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.send({ message: "email Invalide!" });
            } else {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign({ data: user }, "secret", {
                        expiresIn: "1h"
                    });

                    res.send({ success: token });
                    console.log(token);
                } else {
                    res.send({ message: "password Invalide!" });
                }
            }
        }
    });
});


router.post('/findemail', async (req, res) => {
    var result = await User.findOne({ email: req.body.email }).exec();
    if (result) {
        res.send({ emailExist: true });
    } else {
        res.send({ emailExist: false });
    }

})



module.exports = router;

