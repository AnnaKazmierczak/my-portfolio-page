var ngApp = angular.module('myApp', ['ui.bootstrap']); // ui.bootstrap - paczka angularowa

ngApp.controller('MainController', ['$scope', function ($scope){
	$scope.alienText = 'Kosmici atakują! Trzeba coś z tym zrobić.';
	$scope.alienNumber = 30;

	$scope.inputText ='';

	$scope.submit = function(){
		$scope.alienText = $scope.inputText;
	}

	$scope.clearInput = function(){
		$scope.inputText = '';
	}

$scope.start = 0;
$scope.count = 5;

$scope.personArray =[
  {
    "eyeColor": "green",
    "name": "Claire Roy",
    "gender": "female"
  },
  {
    "eyeColor": "blue",
    "name": "Henson Campos",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Hendrix Freeman",
    "gender": "male"
  },
  {
    "eyeColor": "brown",
    "name": "Victoria Bishop",
    "gender": "female"
  },
  {
    "eyeColor": "brown",
    "name": "Tanya Bradley",
    "gender": "female"
  },
  {
    "eyeColor": "green",
    "name": "Effie Macias",
    "gender": "female"
  },
  {
    "eyeColor": "blue",
    "name": "Pam Hartman",
    "gender": "female"
  },
  {
    "eyeColor": "blue",
    "name": "Pena Mcfarland",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Paul Sparks",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Dianne Strickland",
    "gender": "female"
  },
  {
    "eyeColor": "green",
    "name": "Tasha Harris",
    "gender": "female"
  },
  {
    "eyeColor": "brown",
    "name": "Williams Martin",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Maldonado Gill",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Vargas Strong",
    "gender": "male"
  },
  {
    "eyeColor": "green",
    "name": "Angelita Barnett",
    "gender": "female"
  },
  {
    "eyeColor": "brown",
    "name": "Kirkland Mcintosh",
    "gender": "male"
  },
  {
    "eyeColor": "blue",
    "name": "Eliza Richardson",
    "gender": "female"
  },
  {
    "eyeColor": "green",
    "name": "Mindy Watts",
    "gender": "female"
  },
  {
    "eyeColor": "brown",
    "name": "Michelle Hensley",
    "gender": "female"
  },
  {
    "eyeColor": "blue",
    "name": "Isabella Clements",
    "gender": "female"
  }
]




}]);

//TWORZYMY WŁASNY FILTR - filters.js

//