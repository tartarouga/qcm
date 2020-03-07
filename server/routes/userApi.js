var express = require("express");
var router = express.Router();

var User = require("./../models/user");
var Question = require("./../models/question");
var Participation = require("./../models/participation");
const bcrypt = require("bcryptjs");


router.post(
    "/addUser", async (req, res) => {
        const user = new User(req.body);
        user.password = bcrypt.hashSync(req.body.password, 10);
        const result = await user.save().catch(err => err);
        res.send(result);

    }
)

router.post('/reponse/:score', async (req, res) => {
    const part = new Participation(req.body);
    let tab = req.body.reponse
    let score = 0;
    tab.forEach(element => {

        part.reponseUser.push(element)
        part.score = req.params.score;

    });


    /*  for (i = 0; i < req.body.reponse.length; i++) {
         part.reponseUser.push(req.body.reponse[i])
     } */

    const result = await part.save().catch(err => err);

    res.send(result);

    /* if (result) {
        console.log(result)
        const part = await Participation.create(req.body).catch(err => err);
        if (req.body.reponse === result.reponse) {
            part.score = 3
        } else {
            part.score = -1
        }
        part.question = result._id
        console.log(part)
        part.user = req.body.user
        part.reponseUser = req.body.reponse
        await part.save().catch(err => err);
        res.send({ question: true });
    }

    else {
        res.send({ emailExist: false });
    }*/

})

module.exports = router;