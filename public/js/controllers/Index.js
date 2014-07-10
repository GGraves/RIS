angular.module( 'index', []).controller( 'IndexController', function( $scope, $http) 
{
    $http.get( 'api/comment/random')
    .success( function( data)
    {
        $scope.QUOTE = data.comment
        $scope.COMMENTER = data.firstn + " " + data.lastn
    })
    .error( function( data)
    {
        console.log( "Error: " + data)
    });
});
