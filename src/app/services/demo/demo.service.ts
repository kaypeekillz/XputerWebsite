import { Demo } from './../../models/demo';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService extends BaseService {
  controllerName = "requestDemo";
  constructor(http: HttpClient) {
    super(http);
  }

  sendDemo(demo): Observable<Demo> {
    return this.http.post<Demo>(this.getFullUrl() + `sendDemoRequest`, demo);
  }

}
