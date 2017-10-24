module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-nodemon');
	grunt.loadNpmTasks('grunt-env');

	// Projsct configuration
	//
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		env: {
			dev: {
				NODE_ENV: 'development'
			},
			production: {
				NODE_ENV: 'production'
			}
		},

		nodemon: {
			dev: { script: 'index.js'}
		}
	});

	grunt.registerTask('default', [
		'env:dev',
		'nodemon'
	]);

	grunt.registerTask('production', [
		'env:production',
		'nodemon'
	]);
};
