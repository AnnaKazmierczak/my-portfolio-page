var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('cooperation', function(){
	return {
		templateUrl: 'components/cooperation/cooperation.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});