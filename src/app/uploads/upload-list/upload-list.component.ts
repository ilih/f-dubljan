import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Upload} from "../../models/upload";
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false);
  }
}
