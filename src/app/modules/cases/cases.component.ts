import { Component, OnInit } from '@angular/core';
import { Cases } from './interfaces/cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  search = null;

  private cases: Cases[] = [
    {
      state: "sdf",
      country: "dsf",
      latestTotalCases: 2342344556,
      diffFromPrevDay: 567546
    },
    {
      state: "abc",
      country: "dbg",
      latestTotalCases: 234234,
      diffFromPrevDay: 567546
    }
  ];

  public constructor() { }

  public ngOnInit(): void {
  }

  public get getCases():Cases[] {
    if(this.search !== null && this.search !== '') {
      // filter data in function of search input value
      return this.cases.filter(data => {
        if(data.country.startsWith(this.search)) {
          return data;
        }
      });
    } else {
      return this.cases;
    }
  }

}
