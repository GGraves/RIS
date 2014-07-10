var Comment     = require( './models/comment');
var Entry       = require( './models/entry');
var Requestify  = require( 'requestify'); 
var Key         = 'yourtrellokeyhere';
var Token       = 'yourtrellotokenhere';
var List        = 'thelistidyourappsubmitsto';

module.exports = function( app)
{
    app.post( '/api/comment/save', function( req, res)
    {
        Requestify.request(
        'https://trello.com/1/actions/'
        + req.body.action.id  
        + '/card?key='
        + Key 
        + '&token='
        + Token,
        {
            method:     'GET',
            timeout:    '60000'
        })
        .then( function( responsify)
        {
            Entry.find( { cardid: JSON.parse( responsify.body).id}, function( err, entries)
            {
                if( entries.length)
                {
                    Comment.create(
                    {
                        comment : entries[ 0].comment,
                        firstn  : entries[ 0].firstn,
                        lastn   : entries[ 0].lastn,
                        email   : entries[ 0].email
                    }, function()
                    {
                        Entry.remove( { cardid: entries[0].cardid}).exec();
                    });
                    res.send( "success");
                }
                res.send( "fail");
            });
        }); 
    }); 
    
    app.post( '/api/comment/submit', function( req, res) 
    {   
        Entry.find( { $or: [ { $and: [ { firstn: req.body.firstn}, { lastn: req.body.lastn}]}, { email: req.body.email}]}, function( err, entries)
        {
            if( !entries.length)
            {
                Requestify.request(
                'https://trello.com/1/cards?'
                + 'name='
                + encodeURIComponent( req.body.firstn + ' ' + req.body.lastn)  
                + '&desc='
                + encodeURIComponent( '\"' + req.body.comment + '\"' + ' -' + req.body.email)
                + '&idList='
                + List
                + '&key='
                + Key 
                + '&token='
                + Token,
                {
                    method:     'POST',
                    timeout:    '60000'
                })
                .then( function( responsify)
                {   
                    Entry.create(
                    {
                        cardid  : JSON.parse( responsify.body).id,
                        comment : req.body.comment,
                        firstn  : req.body.firstn,
                        lastn   : req.body.lastn,
                        email   : req.body.email
                    });
                }); 
                res.send( "Thank you for your submission!");
            }
            res.send( "Name or email already used.");
        });
    });
    
    app.get( '/api/comment', function( req, res)
    {
        Comment.find( {}, { _id: 0, email: 0, __v: 0}, function( err, comments)
        {
            if( err)
                res.send( err);
          
            res.json( comments);
        });  
    });
    
    app.get( '/api/comment/random', function( req, res)
    {
        Comment.find( {}, { _id: 0, email: 0, __v: 0}, function( err, comments)
        {
            if( err)
                res.send( err);

            res.send( comments[ Math.floor( Math.random() * comments.length)]);
        });  
    });

	app.get( '*', 
    function( req, res)
    {
	    res.sendfile( './public/index.html');
	});
};
