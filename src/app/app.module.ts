// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Services
import { AuthService } from "./services/auth.service";

// Pages part
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DoorsComponent } from './doors/doors.component';
import { WindowsComponent } from './windows/windows.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Translate
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { ProjectLinksComponent } from './project-links/project-links.component';
import { NewsLinksComponent } from './news-links/news-links.component';
import { BannerComponent } from './banner/banner.component';
import { AboutCommentComponent } from './about-comment/about-comment.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WindowsComponent,
    DoorsComponent,
    AboutUsComponent,
    NotFoundComponent,
    HomeComponent,
    NewsComponent,
    ProjectLinksComponent,
    NewsLinksComponent,
    BannerComponent,
    AboutCommentComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
