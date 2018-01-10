import {Component, Input, OnInit} from '@angular/core';
import {Upload} from "../../models/upload";
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  @Input() upload: Upload;

  constructor(private upSvc: UploadService) { }

  deleteUpload() {
    this.upSvc.deleteUpload(this.upload);
  }

  ngOnInit() {
  }

}
