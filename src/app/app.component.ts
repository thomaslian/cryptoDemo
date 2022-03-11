import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/main', icon: 'home' }
  ];
  public bitcoinTests = [
    { title: 'Test 1', url: '/bitcoin-test/1', icon: 'home' },
    { title: 'Test 2', url: '/bitcoin-test/2', icon: 'home' },
    { title: 'Test 3', url: '/bitcoin-test/3', icon: 'home' },
    { title: 'Test 4', url: '/bitcoin-test/4', icon: 'home' },
  ];
  public ethereumTests = [
    { title: 'Test 1', url: '/mnemonic-test/1', icon: 'home' },
    { title: 'Test 2', url: '/mnemonic-test/2', icon: 'home' },
    { title: 'Test 3', url: '/mnemonic-test/3', icon: 'home' },
    { title: 'Test 4', url: '/mnemonic-test/4', icon: 'home' },
  ];
  constructor() { }
}
