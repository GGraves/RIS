module.exports = require( 'mongoose').model( 'Comment', 
{
    comment : String,
    firstn  : String,
    lastn   : String,
    email   : String
});
