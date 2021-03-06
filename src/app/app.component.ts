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
  public wifTests = [
    { title: 'Test 1.1', url: '/test/wif/1.1', icon: 'key' },
    { title: 'Test 1.2', url: '/test/wif/1.2', icon: 'key' },
    { title: 'Test 2.1', url: '/test/wif/2.1', icon: 'key' },
    { title: 'Test 2.2', url: '/test/wif/2.2', icon: 'key' },
  ];
  public mnemonicTests = [
    { title: 'Test 1.1', url: '/test/mnemonic/1.1', icon: 'key' },
    { title: 'Test 1.2', url: '/test/mnemonic/1.2', icon: 'key' },
    { title: 'Test 2.1', url: '/test/mnemonic/2.1', icon: 'key' },
    { title: 'Test 2.2', url: '/test/mnemonic/2.2', icon: 'key' },
  ];
  constructor() { }
}
