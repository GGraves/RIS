angular.module( 'home', []).controller(
'HomeController', 
function( $scope, $http) 
{
	$http.get( '/api/image')
    .success(
    function( data)
    {
        $scope.image = data;
    })
    .error(
    function( data)
    {
        console.log( "Error" + data); 
    });
});
