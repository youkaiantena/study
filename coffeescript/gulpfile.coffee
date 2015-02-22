_          = require 'lodash'
gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
rename     = require 'gulp-rename'
watchify   = require 'watchify'

DIST_DIR     = './public'
COFFEE_FILES = ['main', 'index']

gulp.task 'browserify', ->
  _.each COFFEE_FILES, (fileName) ->
    browserify
      entries: ["./src/coffee/#{fileName}.coffee"]
      extensions: ['.coffee']
    .bundle()
    .pipe source "#{fileName}.js"
    .pipe gulp.dest DIST_DIR


gulp.task 'watchify', ->
  _.each COFFEE_FILES, (fileName) ->
    bundler = watchify
      entries: ["./src/coffee/#{fileName}.coffee"]
      extensions: ['.coffee']
    rebundle = (fileName) ->
      util.log("'#{fileName}.coffee' has changed.")
      bundler.bundle(debug: true)
        .on 'error', (err) -> util.log('Browserify Error:', err)
        .pipe plumber()
        .pipe source "#{fileName}.js"
        .pipe gulp.dest(DIST_DIR)
        .pipe connect.reload()
    bundler.on 'update', -> rebundle(fileName)
    return rebundle(fileName)

gulp.task 'default', ['browserify']
