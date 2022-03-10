import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backup-key',
  templateUrl: './backup-key.component.html',
  styleUrls: ['./backup-key.component.scss'],
})
export class BackupKeyComponent implements OnInit {

  @Input() privateKey: string;
  @Output() userBackedUpKeyEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  confirmBackup(): void { this.userBackedUpKeyEvent.emit(true) }
}
