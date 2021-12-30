'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var QrcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(QrcodeScanner, _super);
    function QrcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QrcodeScanner.prototype.scan = function (arg) { return core.cordova(this, "scan", {}, arguments); };
    QrcodeScanner.pluginName = "QrcodeScanner";
    QrcodeScanner.plugin = "mcnc-plugin-qrcodescanner";
    QrcodeScanner.pluginRef = "QRCodeScannerPlugin";
    QrcodeScanner.repo = "";
    QrcodeScanner.install = "";
    QrcodeScanner.installVariables = [];
    QrcodeScanner.platforms = ["Android", "iOS"];
    QrcodeScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return QrcodeScanner;
}(core.AwesomeCordovaNativePlugin));

exports.QrcodeScanner = QrcodeScanner;
