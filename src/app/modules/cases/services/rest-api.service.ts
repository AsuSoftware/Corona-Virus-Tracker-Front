import { HttpConfigService } from './../../../common/services/http-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient, private url: HttpConfigService) { }

  public getAllCases(): Observable<any> {
    return this.http.get<any>(`${this.url.getUrl}/cases`);
  }
}
