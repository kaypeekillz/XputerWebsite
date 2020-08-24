import { ContactService } from './../../services/contact/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  isLoading = false;

  constructor(
    private contactService: ContactService, 
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.contact = new Contact()
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    phone: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

// this is to validate emailAddress!
  get controlsForm() { return this.contactForm.controls; }

  send(values: any) {
    this.contactService.sendMail(values).subscribe((res) => {
        this.toastr.success("Message Sent Successfully");
        this.contact.Name = "";
        this.contact.Email = "";
        this.contact.Subject = "";
        this.contact.Message = "";
        this.contact.Phone = "";
        this.isLoading = false
    },
    (error) => {
      // this.toastr.error(error.Message, error.Title);
      this.toastr.error("Something went wrong");
      this.isLoading = false;
    })
  }

  toggleLoading = () => {
    this.isLoading = true;
  }

}
