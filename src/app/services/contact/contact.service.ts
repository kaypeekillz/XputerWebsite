import { Contact } from './../../models/contact';
import { Injectable } from '@angular/core';
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {
  controllerName = "contact";
  constructor(http: HttpClient) {
    super(http);
  }
  
  sendMail(contact): Observable<Contact> {
    return this.http.post<Contact>(this.getFullUrl() + `sendEmail`, contact);
  }
}

