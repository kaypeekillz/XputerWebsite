import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  slidesStore = [
    {src: "assets/images/ZinoxLogo.png"},
    {src: "assets/images/kongaLogo.png"},
    {src: 'assets/images/nbplc-logo.png'},
    {src: "assets/images/optionsLogo.png"},
    {src: "assets/images/TDlogo.png"},
    {src: "assets/images/ZinoxLogo.png"},
    {src: "assets/images/kongaLogo.png"},
    {src: "assets/images/ZinoxLogo.png"},
    {src: "assets/images/kongaLogo.png"},
 ]
  hiderightslider: boolean;
  hideleftslider: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  scrollRight() {
    const elmnt = document.getElementById("myDIVM");
    // elmnt.scrollLeft += 408;
    elmnt.scrollLeft += 150;
    // elmnt.scrollRight += 0;
    const total = elmnt.scrollLeft + elmnt.clientWidth;
    this.hiderightslider = total > elmnt.scrollWidth ? true : false;
    // this.hiderightslider = elmnt.scrollRight === 0 ? true : false;
    this.hideleftslider = false;
  }
  scrollLeft() {
    const elmnt = document.getElementById("myDIVM");
    // elmnt.scrollLeft -= 408;
    elmnt.scrollLeft -= 150;
    this.hideleftslider = elmnt.scrollLeft === 0 ? true : false;
    this.hiderightslider = false;
  }


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
