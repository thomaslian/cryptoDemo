import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  @Input() error: string;
  @Output() userRegisterEvent = new EventEmitter<{ email: string, password: string }>();

  email: string;
  password: string;

  ngOnInit(): void { }

  /**
   * Emit registration details to parent component
   */
  register(): void {
    this.userRegisterEvent.emit({ email: this.email, password: this.password });
  }
}
