// WordController.js

var Word = require('../models/word');
var User = require('../models/user');

const wordController = function(router){

    router.route('/word')
    .post(function (req, res) { // CREATES A NEW WORD

        // search for user that already exists 
        var foundUser = User.findOne({ userId: req.body.userId }, function(error, result){
            if(error) return res.status(500).send("Something went wrong while searching for user");
            
            // not found then create new
            if(!foundUser) {
                var user = new User({ userId: req.body.userId});
                user.save(function (err) {
                    if (err) return res.status(500).send("There was a problem adding the information to the database about USER.");

                    var word = new Word({
                        input : req.body.input,
                        output : req.body.output,
                        direction : req.body.direction,
                        user: user._id, /* assign the _id from the our author Bob. This ID is created by default */
                    });

                    word.save(function (err) {
                        if (err) return res.status(500).send("There was a problem with WORD saving.");
                    });
                });
            }
            
            // user already exists
            var word = new Word({
                        input : req.body.input,
                        output : req.body.output,
                        direction : req.body.direction,
                        user: result._id,
                    });

            word.save(function (err) {
                if (err) return res.status(500).send("There was a problem with WORD saving.");
            });
        });
    });

    router.route('/words')
    .post(function (req, res) { // CREATES A NEW WORD
        
        var endedUserId = req.body.userId;
        var wordsCollection = req.body.wordsCollection;
        console.log('collection from bosy');
        console.log(wordsCollection);

        // search for user that already exists 
        var foundUser = User.findOne({ userId: req.body.userId }, function(error, result){
            if(error) return res.status(500).send("Something went wrong while searching for user");
            
            // user is not found then create new
            if(!foundUser) {
                var user = new User({ userId: req.body.userId});
                user.save(function (err) {
                    if (err) return res.status(500).send("There was a problem adding the information to the database about USER.");

                    var word = new Word({
                        input : req.body.input,
                        output : req.body.output,
                        direction : req.body.direction,
                        user: user._id, /* assign the _id from the our author Bob. This ID is created by default */
                    });

                    word.save(function (err) {
                        if (err) return res.status(500).send("There was a problem with WORD saving.");
                    });
                });
            }
            
            // user already exists
            for (var index = 0; index < wordsCollection.length; index++) {
                                       
               var ress = function(i, result){
                   var element = wordsCollection[i];

                    Word.findOne({ input: element.input }, function(err, foundWord){
                            // ERROR
                            if(err){ console.log('Exception occured while search operation.'); }
                            
                            // WORD NOT FOUND
                            if(!foundWord){
                            // create new Word
                                var word = new Word({
                                        input : element.input,
                                        output : element.output,
                                        direction : element.direction,
                                        user: result._id,
                                    });
                                word.save(function (err) {
                                    console.log('Exception occured while the operation of saving words.', err);
                                });
                        }
                    });

               }(index, result); 
                
            }// end for cycle
            
            return res.status(200).send("All words have been added.");
        });
    })         
    .get(function (req, res) { // RETURNS ALL THE WORDS IN THE DATABASE
       
        User.findOne({ userId: '123132'}, function(err, result){
            Word.find({ user : result._id }).exec(function (err, words) {
                    if (err) return handleError(err);
                    return res.status(200).send(words);
                });
        });
        
    });
}

module.exports = wordController;
