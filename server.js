// server.js

const app = require('./app');

const port = process.env.PORT || 4200;
const server = app.listen(port, function(){
    console.log('Server express listening port ' + port);
});