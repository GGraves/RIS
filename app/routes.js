var Comment = require( './models/comment');
var Files   = require( './helpers/findphotos');

module.exports = function( app)
{
    app.get( '/api/image', 
    function( req, res) 
    {
        Files( './public/imgs', 
        function ( err, images)
        {
            images.forEach( 
            function( image)
            {
                if( !image.match( '.jpg'))
                    images.splice( images.indexOf( image), 1);
            });      
            res.send( images[ Math.floor( Math.random() * images.length)]);
        }); 
    });

    app.post( '/api/comment', function( req, res) 
    {
        Comment.create(
        {
            comment : req.body.comment,
            firstn  : req.body.firstn,
            lastn   : req.body.lastn,
            email   : req.body.email
        },  
        function( err, todo) 
        {
            if (err)
                res.send(err);
            
            res.send( 'Comment submitted! Thank you for taking the time to leave a comment.');
        });
    });

	app.get('*', 
    function(req, res)
    {
	    res.sendfile('./public/index.html');
	});
};
