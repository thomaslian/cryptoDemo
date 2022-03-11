import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BitcoinKeys } from 'src/app/models/bitcoin-keys';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-bitcoin-test',
  templateUrl: './bitcoin-test.page.html',
  styleUrls: ['./bitcoin-test.page.scss'],
})
export class BitcoinTestPage implements OnInit {

  bitcoinKeys: BitcoinKeys;
  userPassword: string;
  privateKey: string;
  testPage: number;
  loading: boolean = false;
  registrationError: string;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bitcoin: BitcoinService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.testPage = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.testPage);
  }

  /**
  * Unsubscribe from all subscriptions on destroy and reset variables
  */
  ngOnDestroy(): void {
    this.resetPage();
  }

  /**
   * Register user with data from registration form
   * @param userData - Object containing user email and password
   */
  registerUser(userData: { email: string, password: string }): void {
    this.loading = true;
    this.registrationError = "";

    this.auth.createUserWithEmailAndPassword(userData.email, userData.password).then(() => {
      console.log("User registered successfully!");
      this.subscription = this.bitcoin.getGeneratedEncryptedKeysAndStore(userData.password).subscribe((keys: BitcoinKeys) => {
        this.bitcoinKeys = keys;
        if (this.testPage === 1) {
          console.log('Bitcoin wallet created! - Redirecting user to completed page');
          this.navigateTo('/completed');
        } else {
          this.privateKey = this.bitcoin.decrypt(this.bitcoinKeys.privateKey, userData.password);
          console.log("Private key decrypted successfully! - Asking user to backup the private key");
          this.loading = false;
        }
      });
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.registrationError = error;
    });
  }

  generateKeys(): void {
    this.loading = true;
    this.bitcoin.getGeneratedKeys().subscribe((keys: BitcoinKeys) => {
      console.log('Bitcoin wallet created! - Asking user to backup the private key');
      this.privateKey = keys.privateKey;
      this.loading = false;
    });
  }

  generateAndEncryptWallet(): void {
    this.loading = true;
    this.bitcoin.getGeneratedEncryptedKeys(this.userPassword).subscribe((keys: BitcoinKeys) => {
      this.privateKey = this.bitcoin.decrypt(keys.privateKey, this.userPassword);
      console.log('Bitcoin wallet created! - Asking user to backup the private key');
      this.loading = false;
    });
  }

  // Navigate to a page - This will reset variables and unsubscribe from all subscriptions
  navigateTo(page: string): void {
    this.router.navigateByUrl(page);
    this.resetPage();
  }

  // Reset variables and unsubscribe from all subscriptions
  private resetPage(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.loading = false;
    this.bitcoinKeys = null;
    this.privateKey = null;
    this.registrationError = null;
  }
}
