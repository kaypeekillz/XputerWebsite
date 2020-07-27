import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { mdb-card}
// MDB Angular Pro
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EndearPageComponent } from './components/endear_page/endear-page/endear-page.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '@ngui/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    HomeComponent,
    EndearPageComponent,
    IndustriesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NguiInviewModule, 
    NguiListModule, 
    NguiUtilsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
