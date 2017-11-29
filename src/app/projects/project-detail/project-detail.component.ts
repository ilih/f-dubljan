import { Component, OnInit } from '@angular/core';

// import {Observable} from "rxjs/Observable";
import {Project} from "../../models/project";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProjectService} from "../../services/project.service";
import {environment} from "../../../environments/environment";

// Services
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
// declare let jquery:any;
// declare let $ :any;


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  project: Project = new Project();
  uploads: string = environment.UPLOADS;
  lat: number = 0;
  lng: number = 0;
  title: string;
  subtitle: string;

  constructor(
    private route: ActivatedRoute,
    private  projectService: ProjectService,
    private translate: TranslateService
  ) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setContent();
    })
  }

  setContent() {
    if (this.translate.currentLang !== 'en') {
      this.title = this.project.name;
      this.subtitle = this.project.description;
    } else {
      this.title = this.project.name_en;
      this.subtitle = this.project.description_en;
    }
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.projectService.getProject(id).subscribe(
      (data) => {
        this.project = data;
        let coords = JSON.parse(data.geometry);
        this.lat = coords.lat;
        this.lng = coords.lng;

        this.setContent();
      }
    )
  }

}
