// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

// Routing
import {AboutUsRoutingModule} from "./about-us-routing.module";

// Services
import {TranslateService} from "@ngx-translate/core";

// Components
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { WindowsComponent } from "./windows/windows.component";
import { DoorsComponent } from "./doors/doors.component";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [
    DetailInfoComponent,
    WindowsComponent,
    DoorsComponent
  ],
  providers: [
    TranslateService
  ]
})
export class AboutUsModule { }
