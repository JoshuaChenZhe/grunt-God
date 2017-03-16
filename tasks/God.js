/*
 * grunt-God
 * https://github.com/JoshuaChenZhe/grunt-God
 *
 * Copyright (c) 2017 陈哲
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('God', 'The grunt plugin for code-only', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'doge',
      commentSymbol: '//'
    });

    var testExisRegexMap = {
      'doge': /, , ,,,:,,::::::::iiiiiiiiii:,:,:::::::::iiir;ri7vL77rrirri::    by JoshuaCz/
    };

    var who = options.who,
        commentSymbol = options.commentSymbol,
        commentFilePathMap = {'doge':'asset/doge.txt'},
        commentFilePath = path.join(__dirname, commentFilePathMap[who]),
        commentContent = grunt.file.read(commentFilePath),

        lineCommentArr = commentContent.split(grunt.util.normalizelf('\n')),
        currentdate = (function () {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
            return currentdate;
        })();
    
    lineCommentArr.forEach(function (value, index, arr) {
          arr[index] = commentSymbol + value;
    });

    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));





    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.

        var originalFileContent = grunt.file.read(filepath),
            newFileContent = '<!--'+
                             commentContent +
                             ' at ' +
                             currentdate +
                             '-->'+
                             grunt.util.normalizelf('\n') +
                             originalFileContent;

        if (testExisRegexMap[who].test(originalFileContent)) {
          return;
        }
        grunt.file.write(filepath, newFileContent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
