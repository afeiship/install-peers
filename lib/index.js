const fs = require('fs');
const npm = require('npm');

fs.readFile('package.json', 'utf-8', function(error, contents) {
  const { peerDependencies } = JSON.parse(contents);
  const packages = Object.keys(peerDependencies).map(function(key) {
    return `${key}@${peerDependencies[key]}`;
  });

  npm.load({ save: false }, function() {
    npm.commands.install(packages);
  });
});
