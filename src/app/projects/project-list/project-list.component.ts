import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ProjectService} from "../../services/project.service";
import { environment } from "../../../environments/environment";

// import {Project} from "../../models/project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: any = [];
  uploads: string = environment.UPLOADS;

  constructor(public auth: AuthService, private  projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      (data) => this.projects = data
    )
  }

  goToDetail() {
    console.log(this.projects[0]);
  }

}
