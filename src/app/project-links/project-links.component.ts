import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project.service";
import {environment} from "../../environments/environment";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-project-links',
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.scss'],
  providers: [ProjectService]
})
export class ProjectLinksComponent implements OnInit {
  projects: any = [];
  uploads: string = environment.UPLOADS;

  constructor(private  projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      (data) => this.projects = data
    )
  }
}
