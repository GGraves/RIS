var express         = require('express');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();
var db              = require('./config/db');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 8080;

mongoose.connect(db.url); 

app.use(express.static(__dirname + '/public'));    
app.use(morgan('dev'));                     
app.use(bodyParser());                      
app.use(methodOverride());         

require('./app/routes')(app);
app.listen(port);	
console.log('RIS started...');
