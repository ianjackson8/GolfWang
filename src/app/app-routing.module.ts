import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLayoutComponent } from './book/book-layout/book-layout.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { InfoLayoutComponent } from './info/info-layout/info-layout.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { RetailLayoutComponent } from './retail/retail-layout/retail-layout.component';
import { ShopLayoutComponent } from './shop/shop-layout/shop-layout.component';
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
  },
  {
    path: "collections",
    component: ShopLayoutComponent,
    title: "GOLF WANG | NEW"
  },
  {
    path: "book",
    component: BookLayoutComponent,
    title: "Book"
  },
  {
    path: "login",
    component: LoginLayoutComponent,
    title: "Account"
  },
  {
    path: "info",
    component: InfoLayoutComponent,
    title: "Info"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }