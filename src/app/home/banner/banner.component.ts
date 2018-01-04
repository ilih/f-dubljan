import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // banner: Observable<any>;
  banner: any;

  constructor(public db: AngularFirestore, public af: AngularFireDatabase) {
    // this.banner = db.collection('/banner').valueChanges();
    // this.banner = af.list('/banner');
  }

  ngOnInit() {
  }

}
