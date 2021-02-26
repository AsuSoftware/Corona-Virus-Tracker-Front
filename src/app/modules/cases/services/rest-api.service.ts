import { Cases } from './../interfaces/cases';
import { HttpConfigService } from './../../../common/services/http-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public constructor(private http: HttpClient, private url: HttpConfigService) { }

  public getAllCases(): Observable<Cases[]> {
    return this.http.get<Cases[]>(`${this.url.getUrl}/api/v1/cases`);
  }
}
