import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLang: string = 'ua';

  constructor (private translate: TranslateService) {
    translate.addLangs(["ua", "en"]);
    translate.setDefaultLang('ua');
  }

  ngOnInit() {
  }

  useUa () {
    this.translate.use('ua');
    this.activeLang = 'ua';
  }

  useEn () {
    this.translate.use('en');
    this.activeLang = 'en';
  }

}
