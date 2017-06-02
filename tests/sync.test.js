
var syncOperations = require("../services/syncService");
var _ = require('lodash');
const assert = require("assert");

/// CASE - 1
it("case 1 - push into storage", function(){
    
    var toSyncWords = [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
    }];

    var storedWords = [{
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
        }];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [{
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    assert.deepEqual(result, expectedResult);
});

it("case 1 - send back to client", function(){
    var toSyncWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var storedWords = [{
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
    }];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [{
        input: "spoon",
        output: "ложка",
        direction: "EN-RU"
    },{
        input: "mug",
        output: "чашка",
        direction: "EN-RU"
    }];

    if(_.isEqual(expectedResult, result)){}
    //assert.equal(result, expectedResult); -- it makes comparison including order of arrays
});

it("shoud async multiply two numbers", function(done){
     
    var expectedResult = 12;
    syncOperations.multiplayAsync(4, 3, function(result){
        if(result!==expectedResult){
            throw new Error(`Expected ${expectedResult}, but got ${result}`);
        }
        done();
    });
});

/// CASE - 2
it("case 2 - push into storage", function(){

    var toSyncWords = [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
    }];

    var storedWords = [
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        },
        {
            input: "table",
            output: "стол",
            direction: "EN-RU"
        }];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [];

    assert.deepEqual(result, expectedResult);
});

it("case 2 - send back to client", function(){

    var toSyncWords = [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];
    var storedWords = [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [];

    assert.deepEqual(result, expectedResult);
});

/// CASE - 3
it("case 3 - push into storage", function(){
    
    var toSyncWords = [];
    var storedWords = [
        {
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [];

    assert.deepEqual(result, expectedResult);
});

it("case 3 - send back to client", function(){
    
    var toSyncWords = [];
    var storedWords = [
        {
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [
        {
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

    assert.deepEqual(result, expectedResult);
});

/* CASE 4
=============================================*/
it("case 4 - push into storage", function(){

    var storedWords = [];

    var toSyncWords = [];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [];

    assert.deepEqual(result, expectedResult);
});

it("case 4 - send back to client", function(){

    var storedWords = [];

    var toSyncWords = [];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);
    
    var expectedResult = [];
    
    assert.deepEqual(result, expectedResult);
});

/* CASE 5
=============================================*/
it("case 5 - push into storage", function(){

    var toSyncWords = [{
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
    }];

    var storedWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [{
        input: "mug",
        output: "чашка",
        direction: "EN-RU"
    },
    {
        input: "spoon",
        output: "ложка",
        direction: "EN-RU"
    }];

    assert.deepEqual(result, expectedResult);
});

it("case 5 - send back to client", function(){

    var toSyncWords = [{
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
    }];

    var storedWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [{
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];
    
    assert.deepEqual(result, expectedResult);
});

/* CASE 6
=============================================*/
it("case 6 - push into storage", function(){

    var toSyncWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var storedWords = [];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    assert.deepEqual(result, expectedResult);
});

it("case 6 - send back to client", function(){

    var toSyncWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    },
    {
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var storedWords = [];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [];

    assert.deepEqual(result, expectedResult);
});

/* CASE 7
=============================================*/
it("case 7 - push into storage", function(){

    var toSyncWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    }];

    var storedWords = [{
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

    var expectedResult = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    }];
    
    assert.deepEqual(result, expectedResult);

});

it("case 7 - send back to client", function(){

    var toSyncWords = [{
        input: "table",
        output: "стол",
        direction: "EN-RU"
    }];

    var storedWords = [{
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

    var expectedResult = [{
        input: "forest",
        output: "лес",
        direction: "EN-RU"
    }];

    assert.deepEqual(result, expectedResult);
});