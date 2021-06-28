var path = require('path');
const { exec } = require('child_process');
const testFolder = './assets/';
const finishedFolder = './done/';
const fs = require('fs');

const pathname = path.dirname(require.main.filename).replace(/\\/g, "/")

fs.readdir(testFolder, (err, files) => {
	var b = [];
	for (var i = 0; i < files.length; i++) {
		var noext = path.parse(files[i]).name;
		var ext = path.parse(files[i]).ext;
		if (noext.slice(-4) == "_16x") {

			var cmd = pathname +'/imagemagick/magick.exe convert ' + pathname + testFolder.slice(1) + files[i] + " -colorspace CIELab -filter Lanczos -resize 6.25% -colorspace sRGB " + pathname + finishedFolder.slice(1) + noext.slice(0, -4) + ext;
			console.log(cmd);
			console.log("");
			
			
			exec(cmd, (err, stdout, stderr) => {
				if (err) {
					console.log(`stdout: ${stdout}`);
					console.log(`stderr: ${stderr}`);
					return;
				}
			});
			

		}
	}



})