import { Component, OnInit } from '@angular/core';
import {Upload} from "../../models/upload";
import {UploadService} from "../../services/upload.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  newsForm: FormGroup;

  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(
    private upSvc: UploadService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.newsForm = this.fb.group({
      title: ['', Validators.required ],
      description: ''
    });
  }


  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.upSvc.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

  ngOnInit() {
  }

  revert() {
    this.newsForm.reset();
  }

  onSubmit() {
    // this.hero = this.prepareSaveHero();
    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    // this.ngOnChanges();

    this.uploadSingle();

    this.newsForm.reset();
  }

}
