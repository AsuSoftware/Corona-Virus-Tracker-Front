import { RestApiService } from './services/rest-api.service';
import { LoaderService } from './../../common/services/loader.service';
import { Component, OnInit } from '@angular/core';
import { Cases } from './interfaces/cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  public search: string = '';
  public totalCaseReported: number = 0;
  public totalNewCase: number = 0;

  private cases: Cases[] = [];

  public constructor(private loader: LoaderService, private data: RestApiService) {
    loader.loaderEmitter.next(true);
  }

  public ngOnInit(): void {
    this.data.getAllCases().subscribe(data => {
      this.cases = data;
      this.cases.forEach(data => {
        this.totalCaseReported += data.latestTotalCases;
        this.totalNewCase += data.diffFromPrevDay;
      })
    },
    err => {
      console.log("error: " + err);
    });
    setTimeout(() => {
      this.loader.loaderEmitter.next(false);
    }, 2000);
  }

  public get getCases(): Cases[] {
    if (this.search !== '') {
      // filter data in function of search input value
      return this.cases.filter(data => {
        if (data.country.toLowerCase().startsWith(this.search.toLowerCase())) {
          return data;
        }
      });
    } else {
      return this.cases;
    }
  }

}
