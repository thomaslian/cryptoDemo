import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bitcoin: BitcoinService
  ) { }

  ngOnInit(): void {
    this.testPage = this.activatedRoute.snapshot.paramMap.get('id');

    
  }

}
