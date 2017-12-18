import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compoonents
import {NewsEditComponent} from "./news-edit/news-edit.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsAddComponent} from "./news-add/news-add.component";

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'new',
    component: NewsAddComponent
  },
  {
    path: 'edit',
    component: NewsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
