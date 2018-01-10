import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
// import { AngularFireDatabase } from "angularfire2/database";

interface Banner {
  title: string;
  subtitle: string;
  hearts: number;
  id?: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // bannersColection: AngularFirestoreCollection<Banner>;
  // banners: Observable<Banner[]>;
  // snapshot: any;

  bannerDoc: AngularFirestoreDocument<Banner>;
  banner: Observable<Banner>;

  newContent: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    // this.bannersColection = this.afs.collection('banners', ref => {
    //   return ref.orderBy('title').limit(10);
    // });
    // this.banners = this.bannersColection.valueChanges();
    // this.snapshot = this.bannersColection.snapshotChanges()
    //   .map(arr => {
    //     console.log(arr);
    //     arr.map(snap => snap.payload.doc.data());
    //   })

    this.bannerDoc = this.afs.doc('banners/QZOzhxWGGgPcEhHnHa6Z');
    this.banner = this.bannerDoc.valueChanges();
  }

  updateContent() {
    this.bannerDoc.update({title: this.newContent});
  }

}
