import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/folder/Main', icon: 'home' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public bitcoinTests = [
    { title: 'Test 1', url: '/bitcoin/Test-1', icon: 'home' },
    { title: 'Test 2', url: '/bitcoin/Test-2', icon: 'home' },
    { title: 'Test 3', url: '/bitcoin/Test-3', icon: 'home' },
    { title: 'Test 4', url: '/bitcoin/Test-4', icon: 'home' },
  ];
  public ethereumTests = [
    { title: 'Test 1', url: '/ethereum/Test-1', icon: 'home' },
    { title: 'Test 2', url: '/ethereum/Test-2', icon: 'home' },
    { title: 'Test 3', url: '/ethereum/Test-3', icon: 'home' },
    { title: 'Test 4', url: '/ethereum/Test-4', icon: 'home' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
