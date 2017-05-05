// homeController.js

const homeController = function(router){
    
    router.route('/home')
    .get(function(req, res){
        res.sendfile('./public/index.html');
    });

}

module.exports = homeController;

