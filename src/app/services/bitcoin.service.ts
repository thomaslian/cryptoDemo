import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';
import { BitcoinKeys } from '../models/bitcoin-keys';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(
    private aff: AngularFireFunctions
  ) { }

  getGeneratedKeys(userPassword: string): Observable<BitcoinKeys> {
    return this.aff.httpsCallable('generateBitcoinKeys')({ userPassword });
  }

  decrypt(privateKey: string, password: string) {
    const salt = crypto.enc.Hex.parse(privateKey.substring(0, 32));
    const iv = crypto.enc.Hex.parse(privateKey.substring(32, 64));
    const encrypted = privateKey.substring(64);
    const key = crypto.PBKDF2(password, salt);
    const decrypted = crypto.AES.decrypt(encrypted, key, { iv: iv });

    return decrypted.toString(crypto.enc.Utf8);
  }
}
