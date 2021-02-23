import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private url = 'localhost:8080';

  public constructor() { }

  public get getUrl(): string {
    return this.url;
  }
}
