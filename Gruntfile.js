module.exports = function(grunt) {
	grunt.initConfig({
		less: {  
			dev:{
			// dodaje plik less - po instalacji less for grunt
			files: {
				'assets/style/app.css' : 'app.less' // dokad trafi : zrodlo
			}
		}
		},
		nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['*/**/*.html' , '**/*.js','!node_modules/**'] // wyszukuje wszystkie html w tym projekcie i katalogach zagniezdzonych
        // poniższy zapis wylacza katalog node modules ,zeby nei tlumaczyl go
      }
    },
  },

  nggettext_compile: {
    all: {
    	options: {
        module: 'testApp'
      },
      files: {
        'translations.js': ['po/*.po']
      }
    },
  },

	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-angular-gettext');

};