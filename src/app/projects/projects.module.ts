// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';


// Routing
import { ProjectsRoutingModule } from './projects-routing.module';

// Components
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectAddComponent } from "./project-add/project-add.component";
import { ProjectListComponent } from "./project-list/project-list.component";

//Services
import { ProjectService } from "../services/project.service";
import { TranslateService } from "@ngx-translate/core";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectAddComponent
  ],
  providers: [
    ProjectService,
    TranslateService
  ]
})
export class ProjectsModule { }
