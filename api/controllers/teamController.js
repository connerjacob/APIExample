var mongoose = require('mongoose'),
    Member = mongoose.model('members');
exports.list_all_members = function(req, res){
    Member.find({}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_member = function(req, res){
    var new_member = new Member(req.body);
    new_member.save(function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_member  = function(req, res){
    Member.findById(req.params.taskId, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_member = function(req, res) {
    Member.findOneAndUpdate({_id: req.params.teamId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
exports.delete_a_member = function(req, res){
    Member.remove({
        _id: req.params.teamId
    }, function(err, task){
        if(err)
            res.send(err);
        res.json({message: 'Member Successfully Deleted'});
    })
}