import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Qrcode Scanner
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { QrcodeScanner } from '@awesome-cordova-plugins/qrcode-scanner';
 *
 *
 * constructor(private qrcodeScanner: QrcodeScanner) { }
 *
 * ...
 *
 *
 * this.qrcodeScanner.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class QrcodeScannerOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {any} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    scan(arg: any): Promise<any>;
}

export declare const QrcodeScanner: QrcodeScannerOriginal;