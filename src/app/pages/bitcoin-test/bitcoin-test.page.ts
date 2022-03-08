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

  testPage: string;
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
    this.testPage = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.testPage);
  }

  /**
  * Unsubscribe from all subscriptions on destroy
  */
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
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
      this.subscription = this.bitcoin.getGeneratedKeys(userData.password).subscribe((keys: BitcoinKeys) => {
        console.log(keys);
        console.log('Bitcoin wallet created! - Redirecting user to completed page');
        this.router.navigate(['/completed']);
        this.loading = false;
      });
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.registrationError = error;
    });
  }
}
