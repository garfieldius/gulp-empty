/*                                                               *
 * This file is brought to you by Georg Großberger               *
 * (c) 2014 Cyberhouse GmbH                                      *
 *                                                               *
 * It is free software; you can redistribute it and/or modify it *
 * under the terms of the MIT License / X11 License              *
 *                                                               */

"use strict";

module.exports = function() {
	var through = require("through"),
		files = [];

	return through(function(file) {
		files.push(file);
	}, function() {
		var me = this;

		files.forEach(function(file) {
			me.push(file);
		});

		this.emit("end");
	});
};
