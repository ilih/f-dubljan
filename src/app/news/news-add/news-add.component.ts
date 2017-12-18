import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent {
  rForm: FormGroup;
  post: any;
  title: string = '';
  description: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      "title": [null, Validators.required],
      "description": [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

  addPost(post) {
    this.title = post.title;
    this.description = post.description;
  }
}
