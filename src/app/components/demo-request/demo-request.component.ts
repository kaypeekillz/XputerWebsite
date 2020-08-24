import { Demo } from './../../models/demo';
import { DemoService } from './../../services/demo/demo.service';
import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent implements OnInit {
  demo: Demo
  isLoading = false;

  constructor(
    private router: Router, 
    private toastr: ToastrService,
    private demoService: DemoService, ) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.demo = new Demo()
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

  send(values: any) {
    this.demoService.sendDemo(values).subscribe((res) => {
        // this.toastr.success("Message Sent Successfully");
        this.demo.Name = "";
        this.demo.Email = "";
        this.demo.Address = "";
        this.demo.Industry = "";
        this.demo.Title = "";
        this.demo.Message = "";
        this.demo.Phone = "";
        this.isLoading = false
        this.router.navigate(['/demo-success']);
    },
    (error) => {
      this.toastr.error("Something went wrong");
      this.isLoading = false;
    })
  }

  toggleLoading = () => {
    this.isLoading = true;
  }

}
