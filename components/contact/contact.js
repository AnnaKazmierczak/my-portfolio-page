var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.directive('contact', function(){
	return {
		templateUrl: 'components/contact/contact.html',
		restrict: 'E',
		scope: {}, 
		controller: function($scope){
		}
	}
});