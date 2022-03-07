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
    { title: 'Test 1', url: '/bitcoin-test/Test-1', icon: 'home' },
    { title: 'Test 2', url: '/bitcoin-test/Test-2', icon: 'home' },
    { title: 'Test 3', url: '/bitcoin-test/Test-3', icon: 'home' },
    { title: 'Test 4', url: '/bitcoin-test/Test-4', icon: 'home' },
  ];
  public ethereumTests = [
    { title: 'Test 1', url: '/ethereum/Test-1', icon: 'home' },
    { title: 'Test 2', url: '/ethereum/Test-2', icon: 'home' },
    { title: 'Test 3', url: '/ethereum/Test-3', icon: 'home' },
    { title: 'Test 4', url: '/ethereum/Test-4', icon: 'home' },
  ];
  constructor() { }
}
