import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
import { ShopNavbarComponent } from './shop/shop-navbar/shop-navbar.component';
import { ItemsComponent } from './shop/items/items.component';
import { ShopLayoutComponent } from './shop/shop-layout/shop-layout.component';
import { ShopNewComponent } from './shop/shop-new/shop-new.component';
import { ShopAllComponent } from './shop/shop-all/shop-all.component';
import { ShopBottomsComponent } from './shop/shop-bottoms/shop-bottoms.component';
import { ShopTopsComponent } from './shop/shop-tops/shop-tops.component';
import { ShopHatsComponent } from './shop/shop-hats/shop-hats.component';
import { ShopSocksComponent } from './shop/shop-socks/shop-socks.component';
import { ShopAccessoriesComponent } from './shop/shop-accessories/shop-accessories.component';
import { ShopMusicComponent } from './shop/shop-music/shop-music.component';
import { ShopTeesComponent } from './shop/shop-tees/shop-tees.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { UserInfoTestComponent } from './user-info-test/user-info-test.component';

import { environment } from 'src/environments/environment.prod';
import { AddProductLayoutComponent } from './add-product/add-product-layout/add-product-layout.component';
import { AddProductFormComponent } from './add-product/add-product-form/add-product-form.component';

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
    ShopNavbarComponent,
    ItemsComponent,
    ShopLayoutComponent,
    ShopNewComponent,
    ShopAllComponent,
    ShopBottomsComponent,
    ShopTopsComponent,
    ShopHatsComponent,
    ShopSocksComponent,
    ShopAccessoriesComponent,
    ShopMusicComponent,
    ShopTeesComponent,
    LoginFormComponent,
    UserInfoTestComponent,
    AddProductLayoutComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
