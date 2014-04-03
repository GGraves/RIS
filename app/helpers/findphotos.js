var fs = require( 'fs');

module.exports = function load_files( filepath, callback) 
{
    fs.readdir( filepath, 
        function( err, files)
        {
            if( err)
            {
                callback( err);
                return;
            }
            callback( null, files);
        }
    );
}
