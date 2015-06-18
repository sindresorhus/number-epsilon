'use strict';
var test = require('ava');
var EPSILON = require('./');

test(function (t) {
	t.assert(typeof EPSILON === 'number');
	t.end();
});
