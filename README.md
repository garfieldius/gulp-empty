# Gulp Empty function

A drop - in replacement for any gulp task that you want to disable

> **DEPRECATED**: This package is not actively maintained, it will not go away, 
> but there will be no compatibility fixes. Please use one of the following instead:
> * [gulp.util.noop](https://github.com/gulpjs/gulp-util#noop)
> * [gulp-if](https://www.npmjs.com/package/gulp-if)

## Installation

Use npm

```bash
npm install --save gulp-empty
```

## Usage

Use it as a common gulp task.

eg. Do not uglify of an environment variable is set

```js
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

if (process.env.NO_COMPRESS) {
	uglify = require("gulp-empty");
}

gulp.task("js", function() {
	return gulp.src("js/*")
		.pipe(concat("all.js"))
		.pipe(uglify())
		.pipe(gulp.dest("app/js"));
});
```

## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT) 

Copyright (c) 2014 Georg Großberger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
