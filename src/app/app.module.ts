import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PromotionsComponent } from './home/promotions/promotions.component';
import { SignupFooterComponent } from './home/signup-footer/signup-footer.component';
import { TourComponent } from './tour/tour/tour.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { NoToursComponent } from './tour/no-tours/no-tours.component';
import { RetailComponent } from './retail/retail/retail.component';
import { FlagshipComponent } from './retail/flagship/flagship.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    PromotionsComponent,
    SignupFooterComponent,
    TourComponent,
    HomeLayoutComponent,
    NoToursComponent,
    RetailComponent,
    FlagshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
