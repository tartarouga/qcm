var express = require("express");
var router = express.Router();
var Question = require("./../models/question");



router.post(
    "/addQuestion", async (req, res) => {
        const question = new Question(req.body);
        var result = await question.save().catch(err => err);
        res.send(result);
    });

router.get('/getAllQuestion', async (req, res) => {
    var result = await Question.find().exec()
    res.send({ data: result });
});

module.exports = router;