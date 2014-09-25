/**
 * Sync.js
 * Requires: node.js
 *  	     fs-extra:https://github.com/jprichardson/node-fs-extra
 *  	     node-watch:https://github.com/yuanchuan/node-watch
 *
 * Monitors a local folder for changes, and immediately copies to a remote destination. Assumes mapped drives and same file paths.
 *
 * c:\TemplatePackage => i:\TemplatePackage
 *
 * RUN: node watch.js
 */

var fs = require('fs-extra'),
watch = require('node-watch'),
local = 'c:',									// local drive with copy of TemplatePackage
remote = 'i:',									// remote drive 
path = local + '\\TemplatePackage\\3.0\\',		// path to monitor for changes
source,											// full path to file
dest,											// mirrored destination of the file
filename;										// name of the file

watch(path, function(file) {
	filename = file.replace(/^.*[\\\/]/, '');				
	source = file.substring(0, file.lastIndexOf('\\') + 1);	
	dest = source.replace(local, remote);					

	console.log('copying:' + filename + ' to => ' + dest);
	
	fs.copy(file, dest + filename, function(err){
		if (err) return console.error(err);
		console.log("success!")
	});
});	