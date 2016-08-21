angular.module('testApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en', {"ABOUT ME":"ABOUT ME","PLANS":"PLANS","PORTFOLIO":"PORTFOLIO","SKILLS":"SKILLS"});
    gettextCatalog.setStrings('pl', {"ABOUT ME":"O MNIE","CONTACT":"KONTAKT","CONTACT ME!":"KONTAKT","COOPERATION":"WSPÓŁPRACA","Designed with":"Zaprojektowane z","Language":"Język","My Page - Ania Kazmierczak":"Anna Kazmierczak  PORTFOLIO","PLANS":"PLANY","PORTFOLIO":"PORTFOLIO","SKILLS":"UMIEJĘTNOŚCI","SKILLS PLANS":"UMIEJĘTNOŚCI","You can find me here":"Znajdziesz mnie również tutaj:"});
/* jshint +W100 */
}]);