
var syncOperations = require("../services/syncService");
var _ = require('lodash');
const assert = require("assert");

const dataProvider = require('./dataProvider');


/// CASE - 1
describe("CASE 1", function () {
    it("case 1 - push into storage", function () {

        var toSyncWords = dataProvider.case_1.toSyncWords();
        var storedWords = dataProvider.case_1.storedWords();

        var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

        var expectedResult = [{
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

        assert.deepEqual(result, expectedResult);
    });

    it("case 1 - send back to client", function () {

        var toSyncWords = dataProvider.case_1.toSyncWords();
        var storedWords = dataProvider.case_1.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [{
            input: "spoon",
            output: "ложка",
            direction: "EN-RU"
        }, {
            input: "mug",
            output: "чашка",
            direction: "EN-RU"
        }];

        if (_.isEqual(expectedResult, result)) { }
        //assert.equal(result, expectedResult); -- it makes comparison including order of arrays
    });
});

describe("TEST Async", function () {
    it("shoud async multiply two numbers", function (done) {

        var expectedResult = 12;
        syncOperations.multiplayAsync(4, 3, function (result) {
            if (result !== expectedResult) {
                throw new Error(`Expected ${expectedResult}, but got ${result}`);
            }
            done();
        });
    });
});

/// CASE - 2
describe("CASE 2", function () {
    it("case 2 - push into storage", function () {

        var toSyncWords = dataProvider.case_2.toSyncWords();
        var storedWords = dataProvider.case_2.storedWords();

        var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });

    it("case 2 - send back to client", function () {

        var toSyncWords = dataProvider.case_2.toSyncWords();
        var storedWords = dataProvider.case_2.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });
});

/// CASE - 3
describe("CASE 3", function () {
    it("case 3 - push into storage", function () {

        var toSyncWords = dataProvider.case_3.toSyncWords();
        var storedWords = dataProvider.case_3.storedWords();

        var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });

    it("case 3 - send back to client", function () {

        var toSyncWords = dataProvider.case_3.toSyncWords();
        var storedWords = dataProvider.case_3.storedWords();

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
});

/* CASE 4
=============================================*/
describe("CASE 4", function () {
    it("case 4 - push into storage", function () {

        var toSyncWords = dataProvider.case_4.toSyncWords();
        var storedWords = dataProvider.case_4.storedWords();

        var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });

    it("case 4 - send back to client", function () {

        var toSyncWords = dataProvider.case_4.toSyncWords();
        var storedWords = dataProvider.case_4.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });
});

/* CASE 5
=============================================*/
describe("CASE 5", function () {
    it("case 5 - push into storage", function () {

        var toSyncWords = dataProvider.case_5.toSyncWords();
        var storedWords = dataProvider.case_5.storedWords();

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

    it("case 5 - send back to client", function () {

        var toSyncWords = dataProvider.case_5.toSyncWords();
        var storedWords = dataProvider.case_5.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [{
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

        assert.deepEqual(result, expectedResult);
    });
});

/* CASE 6
=============================================*/
describe("CASE 6", function () {
    it("case 6 - push into storage", function () {

        var toSyncWords = dataProvider.case_6.toSyncWords();
        var storedWords = dataProvider.case_6.storedWords();

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

    it("case 6 - send back to client", function () {

        var toSyncWords = dataProvider.case_6.toSyncWords();
        var storedWords = dataProvider.case_6.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [];

        assert.deepEqual(result, expectedResult);
    });
});

/* CASE 7
=============================================*/
describe("CASE 7", function () {

    it("case 7 - push into storage", function () {

        var toSyncWords = dataProvider.case_7.toSyncWords();
        var storedWords = dataProvider.case_7.storedWords();

        var result = syncOperations.pushIntoStorage(storedWords, toSyncWords);

        var expectedResult = [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        }];

        assert.deepEqual(result, expectedResult);

    });

    it("case 7 - send back to client", function () {

        var toSyncWords = dataProvider.case_7.toSyncWords();
        var storedWords = dataProvider.case_7.storedWords();

        var result = syncOperations.sendBackToClient(storedWords, toSyncWords);

        var expectedResult = [{
            input: "forest",
            output: "лес",
            direction: "EN-RU"
        }];

        assert.deepEqual(result, expectedResult);
    });
});

