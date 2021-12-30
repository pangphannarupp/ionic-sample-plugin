import { Component } from '@angular/core';
import { QrcodeScanner } from 'interface_src/qrcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // win: any = window;

  constructor(private qrcodeScanner: QrcodeScanner) {}

  scanQRCode() {
    // this.win.QRCodeScannerPlugin.scan('test', (result) => {
    //   console.log(result);
    // }, (error) => {
    //   console.log(error);
    // });

    this.qrcodeScanner.scan('Test').then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

}
