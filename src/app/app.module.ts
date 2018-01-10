// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";


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
import { NotFoundComponent } from './not-found/not-found.component';

// Translate
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// Components
import { ProjectLinksComponent } from './project-links/project-links.component';
import { BannerComponent } from './home/banner/banner.component';
import { AboutCommentComponent } from './about-comment/about-comment.component';
import { ContactsComponent } from './contacts/contacts.component';

import { environment } from "../environments/environment";
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import {UploadService} from "./services/upload.service";
import { UloadDetailComponent } from './uploads/uload-detail/uload-detail.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    ProjectLinksComponent,
    BannerComponent,
    AboutCommentComponent,
    ContactsComponent,
    UploadListComponent,
    UploadFormComponent,
    UloadDetailComponent
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
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule
    // AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
