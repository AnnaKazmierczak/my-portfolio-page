//filtry sluza do zmiany wyswietlania tego co widzi uzytkownik - np mozemy dodac spacje do nr konta, ktore uzutk wpropwadzil


var ngApp = angular.module ('myApp'); // odnosimy sie do naszego modulu z pliku glownego

ngApp.filter('specialFilter', function(){  //tworzymy nasz filtr, musi utrzymac wewnatrz siebie, ktora scope bedzie operowal,
	return function(text){
		return text.split('').join('*'); // dwie funkcje dzieli na pojedyncze litery a potem dodaje * 
	};
})

ngApp.filter('moreSpecialFilter', function(){  //tworzymy nasz filtr, musi utrzymac wewnatrz siebie, ktora scope bedzie operowal,
	return function(text, joinMark){
		return text.split('').join(joinMark); //  
	};
})

//FILTRY NA ARRAYU