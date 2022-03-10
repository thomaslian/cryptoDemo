import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Completed page loaded! Sending user to main page in 5 seconds...");
    setTimeout(() => {
      this.router.navigateByUrl('/main');
    }, 5000);
  }
}
