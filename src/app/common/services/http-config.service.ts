import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private readonly url = 'http://localhost:8080';

  public constructor() { }

  public get getUrl(): string {
    return this.url;
  }
}
