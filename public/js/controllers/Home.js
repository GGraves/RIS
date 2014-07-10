angular.module( 'home', []).controller( 'HomeController', function( $scope, $http) 
{
    $scope.formData = {};

    $http.get( '/api/comment')
    .success( function( data) 
    {
        $scope.comments = data;
        console.log( data);
    })
    .error( function( data) 
    {
        console.log( 'Error: ' + data);
    });
 
    $scope.submitComment = function() 
    {
        $http.post( '/api/comment/submit', $scope.formData)
        .success( function( data)
        {
            $scope.formData = {};
            $( ".comment-count").text( data);
        })
        .error( function( data) 
        {
            console.log( 'Error: ' + data);
        });
    };   

    $scope.$on( '$viewContentLoaded',
    function()
    {
        $( document).ready( function()
        {
            $( ".body").css( { "display":"none"});
            $( ".branch-break").css( { "display":"none"});
            $( ".title").click( function()
            {
                if( !$( this).parent().parent().is( ".tree"))
                {
                    $( this).parent().parent().siblings().slideToggle( "slow");
                }
                $( this).parent().siblings().slideToggle( "slow");
                
                $( this).siblings().slideToggle( "slow", function()
                {
                    $('body').animate({scrollTop: $(".tree").offset().top}); 
                });
                $( this).children(".branch-break").slideToggle( "slow");
            });
        });
    });

    $scope.$on( '$viewContentLoaded', function()
    {
        $( document).ready( function()
        {
            var max = 300;
            $( ".comment").keyup( function( e)
            {
                $( ".comment-count").text( "Characters left: " + ( max - $( this).val().length));
            });
        });
    }); 
});
