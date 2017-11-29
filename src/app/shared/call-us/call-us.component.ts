import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Call} from "../../models/call";
import {CallService} from "../../services/call.service";

@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.component.html',
  providers: [CallService]
})
export class CallUsComponent implements OnInit {

  @ViewChild('callForm') callForm: NgForm;
  submitted = false;
  model: Call = new Call();

  constructor(private callService: CallService) { }

  ngOnInit() {
  }

  onSubmit(val) {
    if(this.callForm.valid) {
      this.callService.postNumber(val).subscribe(
        (res) => {
          this.submitted = true;
          let self = this;
          setTimeout(function () {
            self.submitted = false;
          }, 3000);
          this.callForm.reset();
        }
      );
    }
  }
}
