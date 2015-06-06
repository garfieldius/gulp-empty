/*                                                               *
 * This file is brought to you by Georg Großberger               *
 * (c) 2014 Cyberhouse GmbH                                      *
 *                                                               *
 * It is free software; you can redistribute it and/or modify it *
 * under the terms of the MIT License / X11 License              *
 *                                                               */

"use strict";

module.exports = empty;

function empty () {
	var through = require("through2");
	return through.obj(function (file, enc, cb) {
        cb(null, file);
    });
}