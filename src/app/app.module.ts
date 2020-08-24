import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EndearPageComponent } from './components/endear_page/endear-page/endear-page.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '@ngui/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoRequestComponent } from './components/demo-request/demo-request.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { AfterSalesComponent } from './components/after-sales/after-sales.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { DemoSuccessComponent } from './components/demo-success/demo-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    HomeComponent,
    EndearPageComponent,
    IndustriesComponent,
    DemoRequestComponent,
    ECommerceComponent,
    AfterSalesComponent,
    ContactComponent,
    ServicesComponent,
    DemoSuccessComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NguiInviewModule, 
    NguiListModule, 
    NguiUtilsModule,
    CarouselModule,
    RecaptchaModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      iconClasses: {
        error: "toast-error",
        info: "toast-info",
        success: "toast-success",
        warning: "toast-warning",
      },
    }),
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    ToastrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
