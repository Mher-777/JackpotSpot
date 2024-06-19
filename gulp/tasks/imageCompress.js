// =========================================================
// Gulp Task: imageCompress
// =========================================================

let path = require('../settings/path.json'),
	merge = require("merge-stream");


module.exports = (gulp, plugins) => {
	return () => {
		var images = gulp
			.src(path.src.img)
			.pipe(plugins.newer(path.build.img))
			.pipe(gulp.dest(path.build.img));


		return merge(images);
	};
};