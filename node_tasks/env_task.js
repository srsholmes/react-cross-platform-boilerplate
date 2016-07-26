var fs = require('fs');
var path = require('path');

// Use from package.json npm run env-web
// NODE_ENV=native node env_task.js
// NODE_ENV=web node env_task.js
// node ../src/js/app.js

var buildEnv = process.env.NODE_ENV;

function getEnvironments() {
	var viewPath = path.resolve('./app/js/appContainers');
	return fs.readdirSync(viewPath)
		.filter(function(file) {
			return fs.statSync(path.join(viewPath, file)).isDirectory();
		});
}

function getPackageFile() {
	return `var app = require('./${buildEnv}');`;
}

function createFile() {
	var availableEnvironments = getEnvironments();
	if (availableEnvironments.indexOf(buildEnv) === -1) return console.error('No build process for ' + buildEnv);
	fs.writeFileSync(path.resolve('./app/js/appContainers/index.js'), getPackageFile(), 'utf8');
}

createFile();
process.exit();
