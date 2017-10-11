"use strict";

require('colors');
let updater = require('npm-updater');

module.exports = function (context, callback) {
    var version = context ? 'v' + context.pkg.version : '';

    // var logo = 'Welcome to flash! \n'.magenta
                // + 'Please complete the following operation!\n'.magenta;
    var logo = '\n'+
                '  ___  _  __  _____ _        _    ____  _   _  \n' +
                ' / _ \\| |/ / |  ___| |      / \\  / ___|| | | | \n' +
                '| | | | \' /  | |_  | |     / _ \\ \\___ \\| |_| | \n' +
                '| |_| | . \\  |  _| | |___ / ___ \\ ___) |  _  | \n' +
                ' \\___/|_|\\_\\ |_|   |_____/_/   \\_\\____/|_| |_| \n';

    logo = logo + '\nPlease complete the following operation!\n'.magenta;

    logo = logo + ('This version is ' + version + ' \n\n').magenta;

    updater({
        package: context.pkg,
        level: 'patch',
        interval: '1s',
        abort: false,
        updateMessage: `你可以执行 npm i -g ${context.pkg.name}@latest 来安装此版本`
    }).then(() => {
        !process.LOGO_PRINTED && console.log(logo);
        process.LOGO_PRINTED = true;
        callback && callback();
    });
};
