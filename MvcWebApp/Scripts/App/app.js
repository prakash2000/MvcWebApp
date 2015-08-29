var app = angular.module('webapp', ['ui.router']);

app.config(["$stateProvider", "$urlRouterProvider",
	function ($stateProvider, $urlRouterProvider) {

	    //$locationProvider.hashPrefix('!').html5Mode(true);
	    //$locationProvider.html5Mode(true);

	    $stateProvider
		.state("home", {
		    url: '/',
		    templateUrl: '/home/Home',
		    title: 'Home'
		})
		.state("aboutus", {
		    url: '/aboutus',
		    templateUrl: "/home/aboutus",
		    //controller: "MatchListCtrl",
		    title: 'About Us'
		})
        .state("contactus", {
            url: '/contactus',
            templateUrl: "/home/contactus",
            //controller: "MatchListCtrl",
            title: 'Contact Us'
        })
        
        .state("404", {
            url: '/404',
            template: '<h1>404...Page Not Found</h1>',
            title: 'Page Not Found'
        });
	    $urlRouterProvider.when("", "/");
	    $urlRouterProvider.otherwise('/404');
	   
	}]);

app.run(['$state', '$rootScope', function ($state, $rootScope) {
    //$state.transitionTo('home');
    $rootScope.$on('$stateChangeSuccess', function (event, current) {
        event.preventDefault();

        if (current.hasOwnProperty("title")) {
            $rootScope.title = current.title;
        }
    });
}]);