(function() {
'use strict';

	angular
		.module('app')
		.controller('EventAddController', EventAddController);

	EventAddController.$inject = ['$scope', '$state', 'EventService', 'ToastService', 'event'];
	function EventAddController($scope, $state, EventService, ToastService, event) {
		var vm = this;
		
		$scope.editing = true;
		$scope.confirmAction = addEvent;
		$scope.cancelAction = cancel;
		
		vm.editing = !!event;

		console.log(vm.editing);

		vm.add = addEvent;

		vm.event = angular.copy(event) || {};

		init();

		////////////////

		function init() { }

		function addEvent() {
			EventService.add(vm.event);
			ToastService.show('Evento cadastrado com sucesso!');
			$state.go('Logged', { ignore: true });
		}

		function cancel() {
			history.go(-1);
		}
	}	
})();