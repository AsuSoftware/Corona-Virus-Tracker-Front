import { LoaderService } from './common/services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Corona-Virus-Tracker';
  isDataLoaded = false;

  public constructor(private loader: LoaderService) {}

  public ngOnInit(): void {
    this.loader.loaderEmitter.subscribe(data => {
      this.isDataLoaded = data;
    });
  }
}
