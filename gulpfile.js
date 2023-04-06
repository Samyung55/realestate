const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const tailwindcss = require('tailwindcss');

// Compile and minify Sass files
gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      tailwindcss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(gulp.dest('build/styles'));
});

// Bundle and minify JavaScript files
gulp.task('js', function () {
  return browserify({
    entries: 'src/index.js',
    debug: true,
  })
    .transform('babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

// Copy HTML files to build directory
gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

// Copy images to build directory
gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'));
});

// Watch for changes and run tasks
gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('js'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/images/**/*', gulp.series('images'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'js', 'html', 'images', 'watch'));
