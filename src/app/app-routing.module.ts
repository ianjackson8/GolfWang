import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }