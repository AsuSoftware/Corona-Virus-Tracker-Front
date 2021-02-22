import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Corona-Virus-Tracker';
  background = null;

  // TODO: implements some logic to change background in function of route
  // ex: if the route is home the background will be covid background
  // if is cases the background will be blue

  constructor(private router: Router) {
    if (router.url === "/") {
      console.log(router.url);
      this.background = "../../assets/img/home-background.jpg";
    } else {
      this.background = "#312C51";
    }
   }

  ngOnInit(): void {
  }
}
