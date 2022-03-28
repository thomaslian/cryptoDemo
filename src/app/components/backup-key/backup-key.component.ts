import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backup-key',
  templateUrl: './backup-key.component.html',
  styleUrls: ['./backup-key.component.scss'],
})
export class BackupKeyComponent implements OnInit {

  @Input() privateKey: string;
  @Input() testPage: number;
  @Output() userBackedUpKeyEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  sendToEmail(): void { console.log("User chose to send private key to email: " + this.privateKey) }

  copyToClipboard(): void { navigator.clipboard.writeText(this.privateKey) }

  confirmBackup(): void { this.userBackedUpKeyEvent.emit(true) }
}
