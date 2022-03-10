import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.scss'],
})
export class GenerateKeyComponent implements OnInit {

  @Output() userGeneratesKeyEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  generateKey(): void { this.userGeneratesKeyEvent.emit(true) }
}
