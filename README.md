# Bims
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f27d267-67c6-4b2a-9dc8-4b046085d605/deploy-status)](https://app.netlify.com/sites/dbims/deploys)

## Intro

Behold BIMS, your means for bringing order to your finances (and other areas of your life, in future)

## Money - Budgeting and Expense Tracking Module

This project aims to develop a comprehensive budgeting and expense tracking application using Angular v17. The application will enable users to effectively manage their finances by providing features such as:

- Budgeting: Create and manage customized budgets based on various categories and time periods.
- Expense Tracking: Record and categorize expenses to monitor spending patterns and identify areas for potential savings.
- Financial Insights: Generate detailed reports and visualizations to gain insights into financial trends and make informed decisions.
- Goal Setting: Define financial goals and track progress towards achieving them.
- Security: Implement robust security measures to protect user data and financial information.

## Project Directory Structure

```bash
tree ./src --filelimit=20

# outputs the following

./src
├── app
│   ├── _guards
│   │   └── auth
│   │       ├── logged-in.guard.spec.ts
│   │       ├── logged-in.guard.ts
│   │       ├── logged-out.guard.spec.ts
│   │       └── logged-out.guard.ts
│   ├── _repositories
│   │   └── auth
│   │       ├── auth.repository.spec.ts
│   │       └── auth.repository.ts
│   ├── _services
│   │   ├── auth
│   │   │   ├── auth.service.spec.ts
│   │   │   └── auth.service.ts
│   │   └── storage
│   │       ├── storage.service.spec.ts
│   │       └── storage.service.ts
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── auth
│   │   ├── auth.component.html
│   │   ├── auth.component.spec.ts
│   │   ├── auth.component.ts
│   │   ├── auth.routes.ts
│   │   └── login
│   │       ├── login.component.html
│   │       ├── login.component.spec.ts
│   │       └── login.component.ts
│   ├── budget
│   │   ├── budget-details
│   │   │   ├── budget-details.component.html
│   │   │   ├── budget-details.component.spec.ts
│   │   │   └── budget-details.component.ts
│   │   ├── budget-list
│   │   │   ├── budget-list.component.html
│   │   │   ├── budget-list.component.spec.ts
│   │   │   └── budget-list.component.ts
│   │   ├── budget.component.html
│   │   ├── budget.component.spec.ts
│   │   ├── budget.component.ts
│   │   ├── budget.routes.ts
│   │   └── create-budget
│   │       ├── create-budget.component.html
│   │       ├── create-budget.component.spec.ts
│   │       └── create-budget.component.ts
│   ├── core
│   │   └── services
│   │       ├── icon.service.spec.ts
│   │       └── icon.service.ts
│   ├── dashboard
│   │   ├── dashboard.component.html
│   │   ├── dashboard.component.spec.ts
│   │   ├── dashboard.component.ts
│   │   ├── dashboard.routes.ts
│   │   └── insights
│   │       ├── insights.component.html
│   │       ├── insights.component.spec.ts
│   │       └── insights.component.ts
│   ├── not-found
│   │   ├── not-found.component.html
│   │   ├── not-found.component.spec.ts
│   │   └── not-found.component.ts
│   ├── shared
│   │   ├── components
│   │   │   ├── link-button
│   │   │   │   ├── link-button.component.html
│   │   │   │   ├── link-button.component.spec.ts
│   │   │   │   └── link-button.component.ts
│   │   │   ├── logo
│   │   │   │   ├── logo.component.html
│   │   │   │   ├── logo.component.spec.ts
│   │   │   │   └── logo.component.ts
│   │   │   ├── main-footer
│   │   │   │   ├── main-header.component.html
│   │   │   │   ├── main-footer.component.spec.ts
│   │   │   │   └── main-footer.component.ts
│   │   │   ├── main-nav
│   │   │   │   ├── main-nav.component.html
│   │   │   │   ├── main-nav.component.spec.ts
│   │   │   │   ├── main-nav.component.ts
│   │   │   │   └── user.svg
│   │   │   ├── page-header
│   │   │   │   ├── page-header.component.html
│   │   │   │   ├── page-header.component.spec.ts
│   │   │   │   └── page-header.component.ts
│   │   │   ├── secondary-nav
│   │   │   │   ├── secondary-nav.component.html
│   │   │   │   ├── secondary-nav.component.spec.ts
│   │   │   │   └── secondary-nav.component.ts
│   │   │   ├── section-header
│   │   │   │   ├── section-header.component.html
│   │   │   │   ├── section-header.component.spec.ts
│   │   │   │   └── section-header.component.ts
│   │   │   └── svg-icon
│   │   │       ├── svg-icon.component.html
│   │   │       ├── svg-icon.component.spec.ts
│   │   │       └── svg-icon.component.ts
│   │   ├── constants
│   │   │   └── routes.constants.ts
│   │   ├── models
│   │   │   └── auth.model.ts
│   │   └── utils
│   │       └── types.ts
│   └── transaction
│       ├── balance-list
│       │   ├── balance-list.component.html
│       │   ├── balance-list.component.spec.ts
│       │   └── balance-list.component.ts
│       ├── balance-overview
│       │   ├── balance-overview.component.html
│       │   ├── balance-overview.component.spec.ts
│       │   └── balance-overview.component.ts
│       ├── create-transaction
│       │   ├── create-transaction.component.html
│       │   ├── create-transaction.component.spec.ts
│       │   └── create-transaction.component.ts
│       ├── expense-list
│       │   ├── expense-list.component.html
│       │   ├── expense-list.component.spec.ts
│       │   └── expense-list.component.ts
│       ├── expense-overview
│       │   ├── expense-overview.component.html
│       │   ├── expense-overview.component.spec.ts
│       │   └── expense-overview.component.ts
│       ├── income-list
│       │   ├── income-list.component.html
│       │   ├── income-list.component.spec.ts
│       │   └── income-list.component.ts
│       ├── income-overview
│       │   ├── income-overview.component.html
│       │   ├── income-overview.component.spec.ts
│       │   └── income-overview.component.ts
│       ├── summaries
│       │   ├── summaries.component.html
│       │   ├── summaries.component.spec.ts
│       │   └── summaries.component.ts
│       ├── transaction-details
│       │   ├── transaction-details.component.html
│       │   ├── transaction-details.component.spec.ts
│       │   └── transaction-details.component.ts
│       ├── transaction.component.html
│       ├── transaction.component.spec.ts
│       ├── transaction.component.ts
│       └── transaction.routes.ts
├── assets
│   └── icons  [24 entries exceeds filelimit, not opening dir]
├── environments
│   ├── environment.example
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
└── styles.css

46 directories, 112 files
```

## Technologies Used

- Frontend: Angular v17
- Backend: TBD (to be determined)
- Database: TBD (to be determined)

## Project Overview

This budgeting and expense tracking application will empower users to take control of their finances and achieve their financial goals. The application will provide a user-friendly interface, comprehensive features, and robust security measures to ensure a seamless and secure experience for users.
More details in [docs](docs/money-spec.md)
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

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
