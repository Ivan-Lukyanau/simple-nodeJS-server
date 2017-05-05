// server.js

const app = require('./app');

const port = process.env.PORT || 3091;
const server = app.listen(port, function(){
    console.log('Server express listening port ' + port);
});