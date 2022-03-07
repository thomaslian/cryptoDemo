import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';
import { BitcoinKeys } from '../models/bitcoin-keys';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(
    private aff: AngularFireFunctions
  ) { }

  getGeneratedKeys(): Observable<BitcoinKeys> {
    return this.aff.httpsCallable('generateBitcoinKeys')({});
  }
}
