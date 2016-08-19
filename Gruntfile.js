module.exports = function(grunt) {
	grunt.initConfig({
		less: {  
			dev:{
			// dodaje plik less - po instalacji less for grunt
			files: {
				'assets/style/app.css' : 'app.less' // dokad trafi : zrodlo
			}
		}
		}

	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
	
};