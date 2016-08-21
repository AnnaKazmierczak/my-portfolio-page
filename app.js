
//dodane z: 
 $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
        pager: true
    });

// tworzymy modul anularowy
var ngApp = angular.module("testApp", ['ui.router', 'duScroll', 'gettext' ]); // w[] ladujemy biblioteki ktore tutaj ladujemy np ui.router
//ladujemy moduky zewnetrzen do naszego angulara

ngApp.config(function($stateProvider, $urlRouterProvider){ // konfigurujemy
	$urlRouterProvider // info o pierwszej stronie (jezeli nie mam zaznaczonego stanu to wtedy wyswietla ta strone - najlepiej pierwsza, landing page)
		.otherwise('/aboutme');

	$stateProvider
		.state('portfolio',{
			url:'/portfolio',
			templateUrl:'components/portfolio/portfolio.html'
		})
		.state('omnie',{
			url:'/aboutme',
			templateUrl:'components/aboutme/aboutme.html'
		})
		.state('wspolpraca',{
			url:'/wspolpraca',
			templateUrl:'components/wspolpraca/wspolpraca.html'
		})
		.state('kontakt',{
			url:'/kontakt',
			templateUrl:'components/kontakt/kontakt.html'
		})
		
});

ngApp.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('en'); // wstawiamy jezyk startowy
});

ngApp.controller('testController', function ($scope){  //definiujemy controller
	$scope.test = 'test';
});




