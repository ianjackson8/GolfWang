import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLayoutComponent } from './book/book-layout/book-layout.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { InfoLayoutComponent } from './info/info-layout/info-layout.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { RetailLayoutComponent } from './retail/retail-layout/retail-layout.component';
import { ShopAccessoriesComponent } from './shop/shop-accessories/shop-accessories.component';
import { ShopAllComponent } from './shop/shop-all/shop-all.component';
import { ShopBottomsComponent } from './shop/shop-bottoms/shop-bottoms.component';
import { ShopHatsComponent } from './shop/shop-hats/shop-hats.component';
import { ShopLayoutComponent } from './shop/shop-layout/shop-layout.component';
import { ShopMusicComponent } from './shop/shop-music/shop-music.component';
import { ShopNewComponent } from './shop/shop-new/shop-new.component';
import { ShopSocksComponent } from './shop/shop-socks/shop-socks.component';
import { ShopTeesComponent } from './shop/shop-tees/shop-tees.component';
import { ShopTopsComponent } from './shop/shop-tops/shop-tops.component';
import { TourLayoutComponent } from './tour/tour-layout/tour-layout.component';
import { AddProductLayoutComponent } from './add-product/add-product-layout/add-product-layout.component';
import { CreateAcctLayoutComponent } from './create-acct/create-acct-layout/create-acct-layout.component';

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
    title: "GOLF WANG",
    children: [
      {
        path: "new",
        component: ShopNewComponent,
        title: "GOLF WANG | NEW"
      },
      {
        path: "all",
        component: ShopAllComponent,
        title: "GOLF WANG | ALL"
      },
      {
        path: "tops",
        component: ShopTopsComponent,
        title: "GOLF WANG | TOPS"
      },
      {
        path: "bottoms",
        component: ShopBottomsComponent,
        title: "GOLF WANG | BOTTOMS"
      },
      {
        path: "tees",
        component: ShopTeesComponent,
        title: "GOLF WANG | TEES"
      },
      {
        path: "hats",
        component: ShopHatsComponent,
        title: "GOLF WANG | HATS"
      },
      {
        path: "socks",
        component: ShopSocksComponent,
        title: "GOLF WANG | SOCKS"
      },
      {
        path: "accessories",
        component: ShopAccessoriesComponent,
        title: "GOLF WANG | ACCESSORIES"
      },
      {
        path: "music",
        component: ShopMusicComponent,
        title: "GOLF WANG | MUSIC"
      }
    ]
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
  },
  {
    path: "admin",
    component: AddProductLayoutComponent,
    title: "Admin"
  },
  {
    path: "account/register",
    component: CreateAcctLayoutComponent,
    title: "Create Account"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }