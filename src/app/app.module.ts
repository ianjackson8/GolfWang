import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PromotionsComponent } from './home/promotions/promotions.component';
import { SignupFooterComponent } from './home/signup-footer/signup-footer.component';
import { TourLayoutComponent } from './tour/tour-layout/tour-layout.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { NoToursComponent } from './tour/no-tours/no-tours.component';
import { RetailLayoutComponent } from './retail/retail-layout/retail-layout.component';
import { FlagshipComponent } from './retail/flagship/flagship.component';
import { BookLayoutComponent } from './book/book-layout/book-layout.component';
import { InfoLayoutComponent } from './info/info-layout/info-layout.component';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { ShopNewComponent } from './shop/shop-new/shop-new.component';
import { ShopNavbarComponent } from './shop/shop-navbar/shop-navbar.component';
import { ItemsComponent } from './shop/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    PromotionsComponent,
    SignupFooterComponent,
    TourLayoutComponent,
    HomeLayoutComponent,
    NoToursComponent,
    RetailLayoutComponent,
    FlagshipComponent,
    BookLayoutComponent,
    InfoLayoutComponent,
    LoginLayoutComponent,
    ShopNewComponent,
    ShopNavbarComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
