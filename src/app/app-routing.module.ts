import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {WindowsComponent} from './windows/windows.component';
import {DoorsComponent} from './doors/doors.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ProjectAddComponent} from "./projects/project-add/project-add.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'windows',
    component: WindowsComponent
  },
  {
    path: 'doors',
    component: DoorsComponent
  },
  {
    path: 'about_us',
    component: AboutUsComponent
  },
  {
    path: 'not_found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not_found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
