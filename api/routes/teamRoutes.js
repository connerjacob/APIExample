'use strict';
module.exports = function(app) {
    var team = require('../controllers/teamController');
    // respond with "hello world" when a GET request is made to the homepage
    app.route('/team')
       .get(team.list_all_members)
       .post(team.create_a_member);
    
    app.route('/team/:teamId')
       .get(team.read_a_member)
       .put(team.update_a_member)
       .delete(team.delete_a_member);
    app.use(function(req, res) {
         res.status(404).send({url: req.originalUrl + ' not found'})
      });
};