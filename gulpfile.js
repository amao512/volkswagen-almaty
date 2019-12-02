let gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

const css_style = done => {
	gulp.src('./app/sass/**/*.scss')
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: 'compressed'
	}))
	.on('error', console.error.bind(console))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(browserSync.stream());
	done();
}

const slickCss = done => {
	gulp.src('./dist/slick/slick-theme.scss')
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: 'compressed'
	}))
	.on('error', console.error.bind(console))
	.pipe(gulp.dest('./dist/slick/'))
	.pipe(browserSync.stream());
	done();
}

const sync = done => {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

const browserReload = done => {
	browserSync.reload();
	done();
}

const watchFiles = () => {
	gulp.watch('./app/sass/**/*', css_style);
	gulp.watch('./**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFiles));