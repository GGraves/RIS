angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		
        .when('/portfolio', {
			templateUrl: 'views/portfolio.html',
			controller: 'PortfolioController'
		})
		
        .when('/comment', {
			templateUrl: 'views/comment.html',
			controller: 'CommentController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		});
	$locationProvider.html5Mode(true);
}]);
