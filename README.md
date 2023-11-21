# Bims

Behold BIMS, your means for bringing order to your finances (and other areas of your life, in future)

## Money - Budgeting and Expense Tracking Module

This project aims to develop a comprehensive budgeting and expense tracking application using Angular v17. The application will enable users to effectively manage their finances by providing features such as:

- Budgeting: Create and manage customized budgets based on various categories and time periods.
- Expense Tracking: Record and categorize expenses to monitor spending patterns and identify areas for potential savings.
- Financial Insights: Generate detailed reports and visualizations to gain insights into financial trends and make informed decisions.
- Goal Setting: Define financial goals and track progress towards achieving them.
- Security: Implement robust security measures to protect user data and financial information.

## Project Directory Structure

```
src
├── app
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── core
│   │   ├── repositories
│   │   │   ├── budget.repository.ts
│   │   │   ├── expense.repository.ts
│   │   │   ├── goal.repository.ts
│   │   │   └── user.repository.ts
│   │   ├── services
│   │   │   ├── authentication.service.ts
│   │   │   ├── budget.service.ts
│   │   │   ├── expense.service.ts
│   │   │   ├── goal.service.ts
│   │   │   └── user.service.ts
│   │   ├── shared
│   │   │   ├── guards
│   │   │   │   └── auth.guard.ts
│   │   │   └── utils
│   │   │       ├── date-utils.ts
│   │   │       ├── number-utils.ts
│   │   │       └── string-utils.ts
│   ├── components
│   │   ├── auth
│   │   │   ├── login.component.ts
│   │   │   ├── register.component.ts
│   │   │   └── profile.component.ts
│   │   ├── budgets
│   │   │   ├── add-budget.component.ts
│   │   │   ├── budget-details.component.ts
│   │   │   └── budgets-list.component.ts
│   │   └── expenses
│   │       ├── add-expense.component.ts
│   │       ├── expense-details.component.ts
│   │       └── expenses-list.component.ts
├── assets
│   ├── fonts
│   │   ├── roboto-regular.woff2
│   └── images
│       ├── budget-icon.png
│       ├── expense-icon.png
│       └── goal-icon.png
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.ts
├── package.json
└── tsconfig.json
```

## Technologies Used

- Frontend: Angular v17
- Backend: TBD (to be determined)
- Database: TBD (to be determined)

## Project Overview

This budgeting and expense tracking application will empower users to take control of their finances and achieve their financial goals. The application will provide a user-friendly interface, comprehensive features, and robust security measures to ensure a seamless and secure experience for users.

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
