// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from "@agm/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SlickModule } from "ngx-slick";

// Components
import { MapComponent } from "./map/map.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { environment } from "../../environments/environment";
import { CallUsComponent } from './call-us/call-us.component';
import { SliderComponent } from './slider/slider.component';

// Translate
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  exports: [
    MapComponent,
    ContactUsComponent,
    TranslateModule,
    CallUsComponent,
    SliderComponent,
    SlickModule
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_KEY
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forChild(),
    SlickModule.forRoot()
  ],
  declarations: [
    MapComponent,
    ContactUsComponent,
    CallUsComponent,
    SliderComponent
  ]
})
export class SharedModule { }
