import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { RetailLayoutComponent } from './retail/retail-layout/retail-layout.component';
import { TourLayoutComponent } from './tour/tour-layout/tour-layout.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeLayoutComponent,
    title: "GOLF WANG"
  },
  {
    path: "tour", 
    component: TourLayoutComponent,
    title: "Tour"
  },
  {
    path: "flag",
    component: RetailLayoutComponent,
    title: "Flag"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }