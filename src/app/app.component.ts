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
    { title: 'Test 1', url: '/wif-test/1', icon: 'home' },
    { title: 'Test 2', url: '/wif-test/2', icon: 'home' },
    { title: 'Test 3', url: '/wif-test/3', icon: 'home' },
    { title: 'Test 4', url: '/wif-test/4', icon: 'home' },
  ];
  public mnemonicTests = [
    { title: 'Test 1', url: '/mnemonic-test/1', icon: 'home' },
    { title: 'Test 2', url: '/mnemonic-test/2', icon: 'home' },
    { title: 'Test 3', url: '/mnemonic-test/3', icon: 'home' },
    { title: 'Test 4', url: '/mnemonic-test/4', icon: 'home' },
  ];
  constructor() { }
}
