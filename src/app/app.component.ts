import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Corona-Virus-Tracker';
  background = null;

  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      if(val instanceof NavigationEnd) {
        if(val.url === '/') {
          this.background = 'url(/assets/img/home-background.jpg)';
        } else {
          this.background = "#312C51";
        }
      }
    });
  }

  ngOnInit(): void {
  }
}
