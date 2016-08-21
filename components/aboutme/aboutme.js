var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('aboutMe', function(){
	return {
		templateUrl: 'components/aboutme/aboutme.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});