module.exports = require( 'mongoose').model( 'Entry', 
{
    cardid  : String,
    comment : String,
    firstn  : String,
    lastn   : String,
    email   : String
});
