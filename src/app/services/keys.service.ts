import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';
import { WIFKeys } from '../models/wif-keys';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  wifKey: string;
  mnemonicKey: string;

  constructor(
    private aff: AngularFireFunctions
  ) { }

  setWifKey(wifKey: string): void {
    this.wifKey = wifKey;
  }

  getStoredWifKey(): string {
    return this.wifKey;
  }

  setMnemonicKey(mnemonicKey: string): void {
    this.mnemonicKey = mnemonicKey;
  }

  getStoredMnemonicKey(): string {
    return this.mnemonicKey;
  }

  /**
   * Generates a mnemonic phrase using the BIP39 library.
   * @returns Observable<string> - A string containing a mnemonic phrase
   */
  generateMnemonic(): Observable<string> {
    return this.aff.httpsCallable('generateMnemonic')({});
  }

  /**
   * A public and Private key gets generated in Firebase. 
   * As mentioned in the report, this method is supposed to create the keys locally.
   * 
   * @returns WIFKeys - A model containing the public and private key
   */
  generateWIF(): Observable<WIFKeys> {
    return this.aff.httpsCallable('generateWifKeys')({});
  }
}
