import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class BaseService {
  defaultPageSize = 20;

  baseUrl = "http://localhost:3000/api/";

  controllerName = "";
  constructor(protected http: HttpClient) {}
  getFullUrl() {
    return this.baseUrl + `${this.controllerName}/`;
  }
}
