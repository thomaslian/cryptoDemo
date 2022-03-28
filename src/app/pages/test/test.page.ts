import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WIFKeys } from 'src/app/models/wif-keys';
import { KeysService } from 'src/app/services/keys.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  wifKeys: WIFKeys;
  userPassword: string;
  userLoggedIn: boolean = false;
  privateKey: string;
  testPage: number;
  wifTest: boolean = false;
  loading: boolean = false;
  registrationError: string;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private keys: KeysService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.wifTest = this.router.url.includes("wif");
    this.testPage = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.wifTest);
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
      if (this.wifTest) {
        this.subscription = this.keys.getEncryptedWIFAndStore(userData.password).subscribe((keys: WIFKeys) => {
          this.wifKeys = keys;
          this.privateKey = this.keys.decrypt(this.wifKeys.privateKey, userData.password);
          this.keys.setWifKey(this.privateKey);
          this.loading = false;
          console.log(this.privateKey);
        });
      } else {
        this.subscription = this.keys.generateMnemonic().subscribe((mnemonic: string) => {
          this.privateKey = mnemonic;
          this.keys.setMnemonicKey(this.privateKey);
          this.loading = false;
          console.log(this.privateKey);
        });
      }
      console.log("Asking user to backup the private key");
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.registrationError = error;
    });
  }

  loginUser(userData: { email: string, password: string }): void {
    this.loading = true;
    this.registrationError = "";

    this.auth.signInWithEmailAndPassword(userData.email, userData.password).then(() => {
      console.log("User logged in successfully!");
      this.userLoggedIn = true;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.registrationError = error;
    });
  }

  generateKeys(): void {
    this.loading = true;
    if (this.wifTest) {
      this.keys.generateWIF().subscribe((keys: WIFKeys) => {
        console.log('WIF key generated! - Asking user to backup the private key');
        this.privateKey = keys.privateKey;
        this.keys.setWifKey(this.privateKey);
        this.loading = false;
        console.log(this.privateKey);
      });
    } else {
      this.keys.generateMnemonic().subscribe((mnemonic: string) => {
        console.log('Mnemonic key generated! - Asking user to backup the private key');
        this.privateKey = mnemonic;
        this.keys.setMnemonicKey(this.privateKey);
        this.loading = false;
        console.log(this.privateKey);
      });
    }
  }

  restoreKey(privateKey: string) {
    console.log("Restore key: " + privateKey);
    if (this.wifTest && this.keys.getStoredWifKey() === privateKey) {
      console.log("Keys match!");
    } else if (!this.wifTest && this.keys.getStoredMnemonicKey() === privateKey) {
      console.log("Keys match!");
    } else {
      console.log("Keys don't match!");
    }
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
    this.wifKeys = null;
    this.privateKey = null;
    this.registrationError = null;
    this.userLoggedIn = false;
  }
}