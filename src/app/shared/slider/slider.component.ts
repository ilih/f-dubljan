import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  @Input() list: string[] = null;
  uploads: string = environment.UPLOADS;
  slideConfig: object = {"slidesToShow": 1, "slidesToScroll": 1, "infinite": true, "dots": true};

  constructor() { }

  ngOnInit() {
  }

}
