import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

// Modules
import { SharedModule } from "../shared/shared.module";
import { NewsRoutingModule } from './news-routing.module';

// Components
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { UploadService } from "../services/upload.service";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    NewsListComponent,
    NewsDetailComponent,
    NewsFormComponent
  ],
  providers: [
    UploadService
  ]
})
export class NewsModule { }
