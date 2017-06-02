var _ = require('lodash');


var stored = [
    {
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "mug",
        output: "чашка",
        direction: "EN-RU"
    },
    {
        input: "spoon",
        output: "ложка",
        direction: "EN-RU"
    }
];

var toSync = [
    {
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }
];

// result should be : table, mug, spoon, forest

// to storage : forest

// back to client: mug spoon

var loadStoredWords = function(userID){
    return stored;
}

var receivedToSyncWords = function(){
    return toSync;
}

var toAddIntoStorage = [];
var toReturnBack = [];

function synchronize(){
    var storedWords = loadStoredWords('123132');
    var toSyncWords = receivedToSyncWords();


    storedWords.forEach(function(element) {
        //console.log(element);
    }, this);

    // to storage : forest
    var _2storage = _.differenceBy(toSyncWords, storedWords, 'input');

    // back to client: mug spoon
    var _2client = _.differenceBy(storedWords, toSyncWords, 'input');
}

//synchronize();

module.exports = {

    /// compare storage and data to sync and return set of words
    /// which we will push into storage
    pushIntoStorage: function(storedWords, toSyncWords){
        // var storedWords = loadStoredWords('123132');
        // var toSyncWords = receivedToSyncWords();

        // to storage : forest
        return _.differenceBy(toSyncWords, storedWords, 'input');
    },

    /// compare storage and data to sync and return set of words
    /// which we will send back to client to push them into local (device storage) as favorite words
    sendBackToClient: function(storedWords, toSyncWords){
        // var storedWords = loadStoredWords('123132');
        // var toSyncWords = receivedToSyncWords();

        // back to client: mug spoon
        return _.differenceBy(storedWords, toSyncWords, 'input');

    },

    /// just an example of asyc test operation fot the mocha tests set
    multiplayAsync: function (a, b, callback){
        setTimeout(function(){
            callback(a * b);
        }, 1000)
    }
};
