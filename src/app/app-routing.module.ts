import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { RetailComponent } from './retail/retail/retail.component';
import { TourComponent } from './tour/tour/tour.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeLayoutComponent,
    title: "GOLF WANG"
  },
  {
    path: "tour", 
    component: TourComponent,
    title: "Tour"
  },
  {
    path: "flag",
    component: RetailComponent,
    title: "Flag"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }