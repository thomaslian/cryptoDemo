import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-mnemonic-test',
  templateUrl: './mnemonic-test.page.html',
  styleUrls: ['./mnemonic-test.page.scss'],
})
export class MnemonicTestPage implements OnInit {

  testPage: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bitcoin: BitcoinService
  ) { }

  ngOnInit() {
    this.testPage = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.testPage);
    this.bitcoin.generateMnemonic().subscribe((mnemonic: string) => {
      console.log(mnemonic);
    });
  }
}