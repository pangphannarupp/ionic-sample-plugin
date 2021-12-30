var exec = require('cordova/exec');

var PLUGIN_NAME = 'QRCodeScannerPlugin';

var QRCodeScannerPlugin = {
    scan: function(arg, onSuccess, onFail) {
        exec(onSuccess, onFail, PLUGIN_NAME, 'scan', [arg]);
    },
}

module.exports = QRCodeScannerPlugin;
