import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endear-page',
  templateUrl: './endear-page.component.html',
  styleUrls: ['./endear-page.component.scss']
})
export class EndearPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
