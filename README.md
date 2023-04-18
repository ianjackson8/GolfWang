# Changelog
## 04-11-2023
### Added
- Bash script to delete all items in the "Items" branch of the database (for when the site is cleared and new items are added)
- AngularFire and Firebase
- Added Firebase deploy adn associated environments
- Deployed WebApp at [https://golfwang-feea0.web.app](https://golfwang-feea0.web.app)

## 04-04-2023
### Added
- Services to decouple the backend from the view
  - `promotional-items.service.ts`
  - `flagship.service.ts`
  - `shop.service.ts`

### Changed
- Following components to use the service to pull from the Realtime database
  - Promotional items on the main page
  - Flagship detail in Retail
  - All of the shop categories in Shop

## 03-27-2023
### Added
- Call Me if You Get Lost: The Estate Sale promotional card
- New CMIYGL Items into Realtime Database
- Check if a category of items are empty, if so then display message on page

### Changed
- Existing promotional cards to not include "available now"
- All shop components to pull from Realtime Database

### Removed
- Existing products on the page
- `items.ts`
- Free shipping banner

## 03-19-2023
### Added
- passing `link` attribute of `promotionalItems` into `<app-promotions>` component to link promotions to their page
- Bash script to easily add items on shop to backend by formatting JSON and using REST API to add item to the backend

## 03-12-2023
### Added
- Linked [Firebase backend](https://console.firebase.google.com/project/golfwang-feea0/overview) to project 
- `user-info-test` component as backend playground (not used in final product)

### Changed
- The following components to pull data from backend
  - `home-layout.component.ts` -> promotional data
  - `retail-layout.component.ts` -> flagship data

### Removed
- The following mock data files; moved to Firebase
  - `promotions-items.ts`
  - `flagship-items.ts`

## 03-07-2023
### Added
- Added model for items with the following attributes:
  - `images: string[]`
  - `link: string`
  - `type; string[]`
  - `index: string`
- Added mock product data
- Displayed products in category using `*ngFor` component
- Carousel component for each product
- `LoginLayoutComponent` & `LoginPageComponent`
  - Login page with two columns: login and sign up

## 03-06-2023
### Added
- Created components for each filter page, which includes:
  - `ShopAccessoriesComponent`
  - `ShopAllComponent`
  - `ShopBottomsComponent`
  - `ShopHatsComponent`
  - `ShopLayoutComponent`
  - `ShopMusicComponent`
  - `ShopNewComponent`
  - `ShopSocksComponent`
  - `ShopTeesComponent`
  - `ShopTopsComponent`
- Child routing for each filter button in the shop page Navbar; under `ShopLayoutComponent`
- Added `<router-outlet></router-outlet>` for routing to child routes

## 03-03-2023
### Added
- Navbar component for the shop page
- Routing from "SHOP" button in main Navbar

## 02-24-2023
### Added
- Layout components for the following pages
  - info
  - login
  - shop
  - book
- Routing for the pages listed above
- `routerLink`s to the respective pages in the NavBar and footer
- added flex box for each page above
### Changed
- Renamed `RetailComponent` to `RetailLayoutComponent`
- Renamed `TourComponent` to `TourComponentLayout`

## 02-24-2023
### Added
- App routing to Retail page
- Flagship card with store information and image carousel
- Added following attributes to `flagship-item.model.ts`
  - location
  - street
  - city
  - zip
  - images
  - imgNum
  - index
- Added the NYC and LA store information to `flagship-items.ts`
- Implemented to the `retail.component.html` using an `ngFor` loop

### Changed
- App routing to include page titles and routing to Retail page

## 02-10-2023
### Added
- App routing
- Tour page component
- Routing to Tour page
- Text and request button on Tour page
- Routing components to `app.component.html`

### Changed
- Moved landing page content from `app.component.html` to new component `home/home-layout/home-layout.component.html`

## 02-07-2023
### Added
- Promotional card component using `ngFor` loop
  - Added following attributes to `promotions-item.model.ts`
    - img
    - drop
    - link
    - avail
  - Added mock data to `promotions-items.ts`
- Sign up form above footer

### Fixed
- Top navbar to have white background
- Spacing at top of the page

## 01-30-2023
### Added
- Bottom Navbar
- Top Navbar

# GolfWang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
