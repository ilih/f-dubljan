import {Component, Input, OnInit} from '@angular/core';
import { Upload } from "../../models/upload";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: 'app-uload-detail',
  templateUrl: './uload-detail.component.html',
  styleUrls: ['./uload-detail.component.scss']
})
export class UloadDetailComponent implements OnInit {
  @Input() upload: Upload;

  constructor(private upSvc: UploadService) { }

  deleteUpload() {
    this.upSvc.deleteUpload(this.upload);
  }

  ngOnInit() {
  }

}
