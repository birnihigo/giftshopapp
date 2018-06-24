import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;

  constructor() {
    this.Woocommerce = WC({
      url: 'http://127.0.0.1:8080/wordpress',
      consumerKey: 'ck_16d9d46830d56c61ce5f73368fddcbc2d32d97f1',
      consumerSecret: 'cs_84080c00de15acfcf9076729c5b7837e2ae41a39'
    });

    this.WoocommerceV2 = WC({
      url: 'http://127.0.0.1:8080/wordpress',
      consumerKey: 'ck_16d9d46830d56c61ce5f73368fddcbc2d32d97f1',
      consumerSecret: 'cs_84080c00de15acfcf9076729c5b7837e2ae41a39',
      wpAPI: true,
      version: "wc/v2"
    });
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }

}
