import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { BitcoinKeys } from 'src/app/models/bitcoin-keys';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  subscription: Subscription;

  email: string;
  password: string;
  error: string;

  constructor(
    private auth: AngularFireAuth,
    private bitcoin: BitcoinService
  ) { }

  ngOnInit(): void { }

  register(): void {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.subscription = this.bitcoin.getGeneratedKeys(this.password).subscribe((keys: BitcoinKeys) => {
          console.log(keys);

          console.log(keys.privateKey);
          console.log(keys.publicKey);
        });

        console.log('User created!');
        this.error = 'User created successfully!'

      })
      .catch(error => {
        this.error = error;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
