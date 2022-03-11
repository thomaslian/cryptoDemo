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

  /**
   * A public and Private key gets generated in Firebase. 
   * As mentioned in the report, this method is supposed to create the keys locally.
   * 
   * @returns BitcoinKeys - A model containing the public and private key
   */
  getGeneratedKeys(): Observable<BitcoinKeys> {
    return this.aff.httpsCallable('generateBitcoinKeys')({});
  }

  /**
   * A public and Private key gets generated in Firebase. The private key gets 
   * encrypted using the user password in Firebase before returned. 
   * 
   * @param userPassword - The password the user used to register for their account
   * @returns BitcoinKeys - A model containing the public and private key (Private key is encrypted)
   */
  getGeneratedEncryptedKeys(userPassword: string): Observable<BitcoinKeys> {
    return this.aff.httpsCallable('generateBitcoinEncryptedKeys')({ userPassword });
  }

  /**
   * A public and Private key gets generated in Firebase. The private key gets 
   * encrypted using the user password in Firebase before returned. The wallet 
   * gets saved with the user data (UID) in Firestore.
   * 
   * @param userPassword - The password the user used to register for their account
   * @returns BitcoinKeys - A model containing the public and private key (Private key is encrypted)
   */
  getGeneratedEncryptedKeysAndStore(userPassword: string): Observable<BitcoinKeys> {
    return this.aff.httpsCallable('generateAndStoreBitcoinEncryptedKeys')({ userPassword });
  }



  encrypt(privateKey: string, password: string): string {
    const salt = crypto.lib.WordArray.random(128 / 8);
    const key = crypto.PBKDF2(password, salt);
    const iv = crypto.lib.WordArray.random(128 / 8);
    const encrypted = crypto.AES.encrypt(privateKey, key, { iv: iv });

    return salt.toString() + iv.toString() + encrypted.toString();
  }

  decrypt(privateKey: string, password: string): string {
    const salt = crypto.enc.Hex.parse(privateKey.substring(0, 32));
    const iv = crypto.enc.Hex.parse(privateKey.substring(32, 64));
    const encrypted = privateKey.substring(64);
    const key = crypto.PBKDF2(password, salt);
    const decrypted = crypto.AES.decrypt(encrypted, key, { iv: iv });

    return decrypted.toString(crypto.enc.Utf8);
  }
}
