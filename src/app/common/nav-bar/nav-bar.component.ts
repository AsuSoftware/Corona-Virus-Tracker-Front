import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '230px',
      })),
      state('closed', style({
        height: '0px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {

  private isNavOpen = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public onNavChange(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  public get isNavOpened(): boolean {
    return this.isNavOpen;
  }

}
