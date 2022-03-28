import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input() error: string; 
  @Output() userLoggedInEvent = new EventEmitter<{ email: string, password: string }>();

  email: string;
  password: string;

  ngOnInit(): void { }


  login(): void {
    this.userLoggedInEvent.emit({ email: this.email, password: this.password });
  }

}
