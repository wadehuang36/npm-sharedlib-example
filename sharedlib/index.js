'use strict'

var lib = function () {
    // do something
    return undefined;
};

lib.version = function () {
    return "1"; //change this value and re-run project1 and project2 to ensure that this lib get updated.
};

module.exports = lib;