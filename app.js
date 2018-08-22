#!/usr/bin/env node

var fs = require('fs');
var iconFolder = './icons';
var Jimp = require('jimp')
var figlet = require('figlet');


console.log('\x1Bc'); // clear console
figlet('Iconverter', function(err, data) {
    console.log(data)
});

fs.readdir(iconFolder, (err, icons) => {
	icons.forEach(file => {
		Jimp.read(iconFolder+'/'+file, (err, icone) => {
			if(err) throw err;

			console.log('Convertendo '+ file + '...')
			icone.resize(32, 32)
			   	.write('./dist/'+ file.replace(/\.[^/.]+$/, "")  +'_new.bmp');
		});
	})
});

