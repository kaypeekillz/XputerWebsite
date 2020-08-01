import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EndearPageComponent } from './components/endear_page/endear-page/endear-page.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { DemoRequestComponent } from './components/demo-request/demo-request.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { AfterSalesComponent } from './components/after-sales/after-sales.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'endear-page', component: EndearPageComponent},
  {path: 'industries-page', component: IndustriesComponent},
  {path: 'demo-request', component: DemoRequestComponent},
  {path: 'e-commerce', component: ECommerceComponent},
  {path: 'after-sales', component: AfterSalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
