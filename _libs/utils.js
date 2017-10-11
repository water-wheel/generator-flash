"use strict";

const path = require('path');
const PWD = process.cwd();

module.exports = {

    // your-mojo-name => YourMojoName
    parseMojoName: function (name) {
        return name.replace(/\b(\w)|(-\w)/g, function (m) {
            return m.toUpperCase().replace('-', '');
        });
    },

    /**
     * 递归向上查找 package.json
     * @param MAX_LEVEL {number} 最多查找几级
     */
    recursiveFindPkgJson: function (MAX_LEVEL) {
        var pkgJSON = {};
        MAX_LEVEL = MAX_LEVEL || 4;
        for(var i = 0; i < MAX_LEVEL; i++) {
            var higherLevel = './';
            for(var j = 0; j < i; j++) {
                higherLevel += '../';
            }
            try {
                pkgJSON = require(path.join(PWD, higherLevel, 'package.json'));
                break;
            } catch (e) {

            }
        }
        return pkgJSON;
    }
};
