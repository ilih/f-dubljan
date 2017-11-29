import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Contact} from "../models/contact";

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  postEmail(body: object = {}): Observable<Contact> {
    return this.http.post<Contact>(environment.SEND_EMAIL, body);
  }

}
