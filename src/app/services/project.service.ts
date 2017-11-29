import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient,
              private https: Http) { }

  getProject(id): Observable<Project> {
    return this.http.get<Project>(environment.ADD_NEW_PROJECT + '/' + id);
  }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(environment.ADD_NEW_PROJECT);
  }

  postProject(body: object = {}): Observable<Project> {
    return this.http.post<Project>(environment.ADD_NEW_PROJECT, body);
  }
}
