import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Call} from "../models/call";
import {environment} from "../../environments/environment";

@Injectable()
export class CallService {

  constructor(private http: HttpClient) { }

  postNumber(body: object = {}): Observable<Call> {
    return this.http.post<Call>(environment.SEND_NUMBER, body);
  }
}
