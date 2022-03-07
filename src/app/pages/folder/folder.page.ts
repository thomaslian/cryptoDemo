import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BitcoinService } from '../../services/bitcoin.service';
import { BitcoinKeys } from '../../models/bitcoin-keys';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bitcoin: BitcoinService
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.folder == 'Test-1') {
      this.subscription = this.bitcoin.getGeneratedKeys().subscribe((keys: BitcoinKeys) => {
        console.log(keys);
  
        console.log(keys.privateKey);
        console.log(keys.publicKey);
      });
    }

  }

}
