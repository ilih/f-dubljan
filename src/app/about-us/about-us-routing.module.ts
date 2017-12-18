// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {DetailInfoComponent} from "./detail-info/detail-info.component";
import {WindowsComponent} from "./windows/windows.component";
import {DoorsComponent} from "./doors/doors.component";


const routes: Routes = [
  {
    path: '',
    component: DetailInfoComponent
  },
  {
    path: 'windows',
    component: WindowsComponent
  },
  {
    path: 'doors',
    component: DoorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
