var express = require('express'),
app = express(),
port = process.env.PORT || 7000;
mongoose = require('mongoose');
Member = require('./api/models/teamMembers.js');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/team', { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/teamRoutes');
routes(app);

app.listen(port);

console.log("Api server started on: " + port);
