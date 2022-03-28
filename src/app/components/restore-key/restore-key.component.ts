import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restore-key',
  templateUrl: './restore-key.component.html',
  styleUrls: ['./restore-key.component.scss'],
})
export class RestoreKeyComponent implements OnInit {

  @Output() userRestoresKeyEvent = new EventEmitter<string>();

  privateKey: string;

  constructor() { }

  ngOnInit() {}

  restoreKey(): void {
    this.userRestoresKeyEvent.emit(this.privateKey);
    console.log(this.privateKey);
  }

}
