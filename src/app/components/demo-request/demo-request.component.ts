import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent implements OnInit {
  contact: Contact

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.contact = new Contact()
  }

  demoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    phone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    numOfStaffs: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required),
  });

// this is to validate emailAddress
  get controlsForm() { return this.demoForm.controls; }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  sendRequest() {
    console.log('I was clicked!');
  }

}
