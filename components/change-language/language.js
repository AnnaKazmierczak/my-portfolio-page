var ngApp = angular.module ('testApp'); // odnosimy sie do naszego modulu z pliku glownego

// ngApp.directive('changeLanguage', function(){
// 	return {
// 		templateUrl: 'components/change-language/language.html',
// 		restrict: 'E',
// 		scope: {}, 
// 		controller: function($scope, gettextCatalog){
// 			$scope.changeLanguage = function(language){
// 			gettextCatalog.setCurrentLanguage(language);
// 			document.title = gettextCatalog.getString('My Page - Ania Kazmierczak')
// 			}
// 			$scope.languageList = [
// 			{	
// 					code:'pl',
// 					label:'Polski'
// 				},
// 				{
// 					code:'en',
// 					label:'English'
// 				}
// 			];
// 		}
// 	}
// });

ngApp.directive('changeLanguageImg', function () {
    return {
        templateUrl: 'components/change-language/languageimg.html',
        scope: {},
        controller: function ($scope, gettextCatalog) {
            $scope.changeLanguage = function(language){
                gettextCatalog.setCurrentLanguage(language);
            };
            $scope.languageList = [
                {
                    code: 'pl',
                    label: 'Polski',
                    image: 'assets/photos/flagpl.jpg'
                },
                {
                    code: 'en',
                    label: 'English',
                     image: 'assets/photos/flagen.jpg'
                }
            ];
        }
    }
});