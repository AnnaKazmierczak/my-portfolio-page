var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('navigation', function(){
	return {
		templateUrl: 'components/navigation/navigation.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});