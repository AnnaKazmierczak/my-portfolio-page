var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('skills', function(){
	return {
		templateUrl: 'components/skills-and-plans/skills-and-plans.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});