(function() {
	'use strict';

	angular
		.module('app')
		.config(ConfigRoutes);

	ConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function ConfigRoutes($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state({
				name: 'Home',
				url: '/',
				templateUrl: 'app/initial/home.html',
				controller: 'HomeController',
				controllerAs: 'home',
				params: {
					ignore: false,
				}
			})

			.state({
				name: 'Logged',
				url: '/logged',
				templateUrl: 'app/logged/home.html',
				controller: 'LoggedHomeController',
				controllerAs: 'home',
				params: {
					ignore: false,
				},
				resolve: {
					events: ['EventService', (EventService) => EventService.list()]
				}
			})

			.state({
				name: 'EventDetails',
				url: '/event/details/:id',
				templateUrl: 'app/event/details.html',
				controller: 'EventDetailsController',
				controllerAs: 'eventCtrl',
				params: {
					event: null
				},
				resolve: {
					event: ['EventService', '$stateParams',
						(EventService, $stateParams) => EventService.get(+$stateParams.id)
					]
				}
			})

			.state({
				name: 'AddEvent',
				url: '/event/add',
				templateUrl: 'app/event/add.html',
				controller: 'EventAddController',
				controllerAs: 'eventCtrl',
			})

			.state({
				name: 'MyFavorites',
				url: '/event/favorites',
				templateUrl: 'app/logged/home.html',
				controller: 'LoggedHomeController',
				controllerAs: 'home',
				params: {
					event: null,
				},
				resolve: {
					events: ['EventService', (EventService) => EventService.listFavorites()]
				}
			});
	}
})();