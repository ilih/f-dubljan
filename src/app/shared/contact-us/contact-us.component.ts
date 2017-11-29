import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from "../../models/contact";
import { EmailService } from "../../services/email.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  providers: [
    EmailService
  ]
})
export class ContactUsComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm;
  submitted = false;
  model: Contact = new Contact();

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }
  onSubmit(val) {
    if(this.contactForm.valid) {
      this.emailService.postEmail(val).subscribe(
        (res) => {
          this.submitted = true;
          let self = this;
          setTimeout(function () {
            self.submitted = false;
          }, 3000);
          this.contactForm.reset();
        }
      );
    }
  }
}
