// routerBase.js

const routerBase = function(router){
    
    var bodyParser = require('body-parser');
    router.use(bodyParser.json({ type: '*/*'}));
}

module.exports = routerBase;