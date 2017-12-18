import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

// Modules
import { SharedModule } from "../shared/shared.module";
import { NewsRoutingModule } from './news-routing.module';

// Components
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

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
    NewsItemComponent,
    NewsAddComponent,
    NewsEditComponent
  ]
})
export class NewsModule { }
