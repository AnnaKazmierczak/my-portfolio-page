var ngApp = angular.module('testApp');

ngApp.factory('languageFactory', function(gettextCatalog){
	var languages = [
			{	
					code:'pl',
					label:'Polski'
				},
				{
					code:'en',
					label:'English'
				}
			];
			
		var setActiveLanguage = function(language){
			gettextCatalog.setCurrentLanguage(language);
			document.title = gettextCatalog.getString('My Page - Ania Kazmierczak')
		}
			return{
				langauges:languages,
				setActiveLanguage:setActiveLanguage
			}
})