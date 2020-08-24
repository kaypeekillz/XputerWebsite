import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  hiderightslider: boolean;
  hideleftslider: boolean;

  showfirst: boolean = false;
  showlater: boolean = true;
  noView: boolean = true;
  mainBanner: boolean = true;

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (window.screen.width < 576) { 
      this.noView = false;
      // this.mainBanner = true;
      setTimeout(() => {
        this.showfirst = true;
        this.showlater = false;
      }, 0);
    } 

    setTimeout(() => {
      this.showfirst = true;
      this.showlater = false;
    }, 2000);
  }

  // bannerTimer() {
  //   setTimeout(() => {
  //     this.showfirst = true;
  //     this.showlater = false;
  //   }, 2000);
  // }

  scrollRight() {
    const elmnt = document.getElementById("myDIVM");
    elmnt.scrollLeft += 150;
    const total = elmnt.scrollLeft + elmnt.clientWidth;
    this.hiderightslider = total > elmnt.scrollWidth ? true : false;
    this.hideleftslider = false;
  }

  scrollLeft() {
    const elmnt = document.getElementById("myDIVM");
    elmnt.scrollLeft -= 150;
    this.hideleftslider = elmnt.scrollLeft === 0 ? true : false;
    this.hiderightslider = false;
  }

}
