/// data provider for tests (syncService)

module.exports = {
    case_1: {
        toSyncWords: function(){
            return [{
            input: "table",
            output: "стол",
            direction: "EN-RU"
        },
        {
            input: "forest",
            output: "лес",
            direction: "EN-RU"
    }];
        },
        storedWords: function(){
            return [{
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
        }
    },
    case_2: {
        toSyncWords: function(){
            return [{
                input: "table",
                output: "стол",
                direction: "EN-RU"
            },
            {
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            }];
        },
        storedWords: function(){
            return [{
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            },
            {
                input: "table",
                output: "стол",
                direction: "EN-RU"
            }];
        }
    },
    case_3: {
        toSyncWords: function(){
            return []; 
        },
        storedWords: function(){
            return [{
                input: "table",
                output: "стол",
                direction: "EN-RU"
            },
            {
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            }];
        }
    },
    case_4: {
        toSyncWords: function(){
            return []; 
        },
        storedWords: function(){
            return [];
        }
    },
    case_5: {
        toSyncWords: function(){
            return [{
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
        },
        storedWords: function(){
            return [{
                input: "table",
                output: "стол",
                direction: "EN-RU"
            },
            {
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            }];
        }

    },
    case_6: {
        toSyncWords: function(){
            return [{
                input: "table",
                output: "стол",
                direction: "EN-RU"
            },
            {
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            }];
        },
        storedWords: function(){
            return [];
        }
    },
    case_7: {
        toSyncWords: function(){
            return [{
                input: "table",
                output: "стол",
                direction: "EN-RU"
            }];
        },
        storedWords: function(){
            return [{
                input: "forest",
                output: "лес",
                direction: "EN-RU"
            }];
        }
    },
};