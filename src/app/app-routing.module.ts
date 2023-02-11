import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { RetailComponent } from './retail/retail/retail.component';
import { TourComponent } from './tour/tour/tour.component';

const routes: Routes = [
  {path: "", component: HomeLayoutComponent},
  {path: "tour", component: TourComponent},
  {path: "flag", component: RetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }