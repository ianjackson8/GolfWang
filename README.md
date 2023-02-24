# Changelog
## DATE
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
