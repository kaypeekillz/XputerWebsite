import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EndearPageComponent } from './components/endear_page/endear-page/endear-page.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { DemoRequestComponent } from './components/demo-request/demo-request.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'endear-page', component: EndearPageComponent},
  {path: 'industries-page', component: IndustriesComponent},
  {path: 'demo-request', component: DemoRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
