// WordController.js

var Word = require('../word');

const wordController = function(router){

    router.route('/words')
    .post(function (req, res) { // CREATES A NEW WORD
        Word.create({
                input : req.body.input,
                output : req.body.output,
                direction : req.body.direction
            }, 
            function (err, word) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(word);
            });
    })        
    .get(function (req, res) { // RETURNS ALL THE WORDS IN THE DATABASE
        Word.find({}, function (err, words) {
            if (err) return res.status(500).send("There was a problem finding the words.");
            res.status(200).send(words);
        });
    });
}

module.exports = wordController;
