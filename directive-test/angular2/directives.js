var ngApp = angular.module ('myApp'); // odnosimy sie do naszego modulu z pliku glownego

// nasza dyrektywa, musi byc tamplate
ngApp.directive('personTable', function(){
	return{
		templateUrl: 'table.html'
	}
})