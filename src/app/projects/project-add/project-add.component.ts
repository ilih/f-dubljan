import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { NgForm } from "@angular/forms";



@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {
  @ViewChild('projectForm') projectForm: NgForm;
  submitted = false;
  model: Project = new Project();
  mlat: number = 0; //49.846759
  mlng: number = 0; //24.039932
  files: any = {};

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  getCoords(e) {
    this.model.geometry = JSON.stringify(e.coords);
  }

  onFileChange(e) {
    if(e.target.files.length > 0) {
      this.files[e.target.name] = e.target.files;
    }
  }


  onSubmit(val) {
    const formModel = new FormData();
    for (let key in val) {
      formModel.append(key, val[key]);
    }

    let files = this.files;

    for (let key in files) {
      for (let i = 0; i < files[key].length; i++) {
        formModel.append(key, files[key][i]);
      }
    }

    if(this.projectForm.valid) {
      this.projectService.postProject(formModel).subscribe(
        (res) => {
          this.submitted = true;
          let self = this;
          setTimeout(function () {
            self.submitted = false;
          }, 3000);
          this.projectForm.reset();
        }
      );
    }
  }
}
