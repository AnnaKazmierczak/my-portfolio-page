var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('portfolio', function(){
	return {
		templateUrl: 'components/portfolio/portfolio.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});