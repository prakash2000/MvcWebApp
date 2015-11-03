var app = angular.module('appdash', ["ui.bootstrap", "ui.router"]);
"use strict";
app.config(["$stateProvider", "$urlRouterProvider",
	function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
		.state("home", {
		    url: '/',
		    templateUrl: '/Dashboard/Home',
		    title: 'Dashboard Home'
		})
		.state("new_match", {
		    url: '/new_match',
		    templateUrl: "/Matches/NewMatch",
		    controller: "MatchSaveCtrl",
		    title: 'Add Matches'
		})
        .state("list_match", {
            url: '/list_match',
            templateUrl: "/Matches/ListMatch",
            controller: "MatchListCtrl",
            title: 'All Matches'
        })
        .state("new_player", {
            url: '/new_player',
            templateUrl: "NewPlayer",
            controller: "PlayerSaveCtrl",
            title: ' Add Players'
        })
        //.state("signin",{
		//	url:'/signin',
		//	templateUrl: "Signin",

		//	title:'Admin Login'			
		//})
        .state("404", {
            url: '/404',
            template: '<h1>404...Page Not Found</h1>',
            title: 'Page Not Found'
        });
	    $urlRouterProvider.otherwise('/404');
	    $urlRouterProvider.when("", "/");
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