var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('footer', function(){
	return {
		templateUrl: 'components/footer/footer.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});