# grunt-God

> The grunt plugin for code-only

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-God --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-God');
```

## The "God" task

### Overview
In your project's Gruntfile, add a section named `God` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  God: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.who
Type: `String`
Default value: `doge`

指明用doge作为标签

A string value that is used to do something with whatever.

#### options.fileType
Type: `String`
Default value: `html`

文件类型为html或js

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  God: {
    options: {
      'who':'doge',
      'fileType':'html'
    },
    dist:['examples/*']
  },
});
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2017.3.16&nbsp;&nbsp;v0.1.0&nbsp;&nbsp; init
