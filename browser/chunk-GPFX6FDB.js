import {
  APP_ROUTE
} from "./chunk-QLHHM3FY.js";
import {
  BalanceOverviewComponent,
  ExpenseOverviewComponent,
  SecondaryNavComponent
} from "./chunk-E2VLJGTN.js";
import {
  PageHeaderComponent,
  SvgIconComponent
} from "./chunk-4JUXVHXJ.js";
import {
  CommonModule,
  RouterLink,
  RouterOutlet,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZD6PR3E5.js";

// src/app/transaction/create-transaction/create-transaction.component.ts
var CreateTransactionComponent = /* @__PURE__ */ (() => {
  const _CreateTransactionComponent = class _CreateTransactionComponent {
  };
  _CreateTransactionComponent.\u0275fac = function CreateTransactionComponent_Factory(t) {
    return new (t || _CreateTransactionComponent)();
  };
  _CreateTransactionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CreateTransactionComponent,
    selectors: [["app-create-transaction"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function CreateTransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "create-expense works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let CreateTransactionComponent2 = _CreateTransactionComponent;
  return CreateTransactionComponent2;
})();

// src/app/transaction/transaction-details/transaction-details.component.ts
var TransactionDetailsComponent = /* @__PURE__ */ (() => {
  const _TransactionDetailsComponent = class _TransactionDetailsComponent {
  };
  _TransactionDetailsComponent.\u0275fac = function TransactionDetailsComponent_Factory(t) {
    return new (t || _TransactionDetailsComponent)();
  };
  _TransactionDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TransactionDetailsComponent,
    selectors: [["app-transaction-details"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function TransactionDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "expense-details works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let TransactionDetailsComponent2 = _TransactionDetailsComponent;
  return TransactionDetailsComponent2;
})();

// src/app/transaction/transaction.component.ts
var TransactionComponent = /* @__PURE__ */ (() => {
  const _TransactionComponent = class _TransactionComponent {
    constructor() {
      this.secondaryNavItems = [{
        path: APP_ROUTE.incomes,
        label: "Incomes",
        icon: "folder-plus",
        permissions: []
      }, {
        path: APP_ROUTE.expenses,
        label: "Expenses",
        icon: "folder-minus",
        permissions: []
      }, {
        path: APP_ROUTE.balances,
        label: "Balances",
        icon: "briefcase",
        permissions: []
      }];
    }
  };
  _TransactionComponent.\u0275fac = function TransactionComponent_Factory(t) {
    return new (t || _TransactionComponent)();
  };
  _TransactionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TransactionComponent,
    selectors: [["app-transaction"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [[1, "p-4"], [3, "navItems"]],
    template: function TransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "app-secondary-nav", 1)(2, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(1);
        \u0275\u0275property("navItems", ctx.secondaryNavItems);
      }
    },
    dependencies: [CommonModule, RouterOutlet, SecondaryNavComponent],
    encapsulation: 2
  });
  let TransactionComponent2 = _TransactionComponent;
  return TransactionComponent2;
})();

// src/app/transaction/expense-list/expense-list.component.ts
var ExpenseListComponent = /* @__PURE__ */ (() => {
  const _ExpenseListComponent = class _ExpenseListComponent {
  };
  _ExpenseListComponent.\u0275fac = function ExpenseListComponent_Factory(t) {
    return new (t || _ExpenseListComponent)();
  };
  _ExpenseListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExpenseListComponent,
    selectors: [["app-expense-list"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [["pageTitle", "Expenses"]],
    template: function ExpenseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "p");
        \u0275\u0275text(2, "expense-list works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, PageHeaderComponent],
    encapsulation: 2
  });
  let ExpenseListComponent2 = _ExpenseListComponent;
  return ExpenseListComponent2;
})();

// src/app/shared/components/link-button/link-button.component.ts
function LinkButtonComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-svg-icon", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("iconName", ctx_r1.iconName);
  }
}
function LinkButtonComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r2.label);
  }
}
function LinkButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275template(1, LinkButtonComponent_Conditional_0_Conditional_1_Template, 1, 1, "app-svg-icon", 2)(2, LinkButtonComponent_Conditional_0_Conditional_2_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.path);
    \u0275\u0275advance(1);
    \u0275\u0275conditional(1, ctx_r0.iconName ? 1 : -1);
    \u0275\u0275advance(1);
    \u0275\u0275conditional(2, ctx_r0.label ? 2 : -1);
  }
}
var LinkButtonComponent = /* @__PURE__ */ (() => {
  const _LinkButtonComponent = class _LinkButtonComponent {
  };
  _LinkButtonComponent.\u0275fac = function LinkButtonComponent_Factory(t) {
    return new (t || _LinkButtonComponent)();
  };
  _LinkButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LinkButtonComponent,
    selectors: [["app-link-button"]],
    inputs: {
      path: "path",
      label: "label",
      iconName: "iconName"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "flex items-center justify-start gap-1.5 opacity-50 hover:opacity-90", 3, "routerLink"], [1, "flex", "items-center", "justify-start", "gap-1.5", "opacity-50", "hover:opacity-90", 3, "routerLink"], ["iconClass", "w-4 h-4", 3, "iconName"], ["class", ""], [1, ""]],
    template: function LinkButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LinkButtonComponent_Conditional_0_Template, 3, 3, "a", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.label || ctx.iconName ? 0 : -1);
      }
    },
    dependencies: [CommonModule, RouterLink, SvgIconComponent],
    encapsulation: 2
  });
  let LinkButtonComponent2 = _LinkButtonComponent;
  return LinkButtonComponent2;
})();

// src/app/shared/components/section-header/section-header.component.ts
function SectionHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r0.header);
  }
}
function SectionHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r1.subheader);
  }
}
function SectionHeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-link-button", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r2.link.label)("path", ctx_r2.link.path)("iconName", ctx_r2.link.iconName);
  }
}
var SectionHeaderComponent = /* @__PURE__ */ (() => {
  const _SectionHeaderComponent = class _SectionHeaderComponent {
  };
  _SectionHeaderComponent.\u0275fac = function SectionHeaderComponent_Factory(t) {
    return new (t || _SectionHeaderComponent)();
  };
  _SectionHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SectionHeaderComponent,
    selectors: [["app-section-header"]],
    inputs: {
      header: "header",
      subheader: "subheader",
      link: "link"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 5,
    vars: 3,
    consts: [[1, "flex", "justify-between", "items-center", "py-2", "text-secondary-200"], [1, "flex", "flex-col", "gap-0"], ["class", "text-2xl"], ["class", "text-sm text-secondary-200"], [3, "label", "path", "iconName"], [1, "text-2xl"], [1, "text-sm", "text-secondary-200"]],
    template: function SectionHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, SectionHeaderComponent_Conditional_2_Template, 2, 1, "h1", 2)(3, SectionHeaderComponent_Conditional_3_Template, 2, 1, "p", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, SectionHeaderComponent_Conditional_4_Template, 1, 3, "app-link-button", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.header ? 2 : -1);
        \u0275\u0275advance(1);
        \u0275\u0275conditional(3, ctx.subheader ? 3 : -1);
        \u0275\u0275advance(1);
        \u0275\u0275conditional(4, ctx.link ? 4 : -1);
      }
    },
    dependencies: [CommonModule, LinkButtonComponent],
    encapsulation: 2
  });
  let SectionHeaderComponent2 = _SectionHeaderComponent;
  return SectionHeaderComponent2;
})();

// src/app/transaction/income-overview/income-overview.component.ts
var IncomeOverviewComponent = /* @__PURE__ */ (() => {
  const _IncomeOverviewComponent = class _IncomeOverviewComponent {
  };
  _IncomeOverviewComponent.\u0275fac = function IncomeOverviewComponent_Factory(t) {
    return new (t || _IncomeOverviewComponent)();
  };
  _IncomeOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IncomeOverviewComponent,
    selectors: [["app-income-overview"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function IncomeOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "income-overview works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let IncomeOverviewComponent2 = _IncomeOverviewComponent;
  return IncomeOverviewComponent2;
})();

// src/app/transaction/summaries/summaries.component.ts
var _c0 = (a0) => ({
  path: a0,
  iconName: "square-plus"
});
var SummariesComponent = /* @__PURE__ */ (() => {
  const _SummariesComponent = class _SummariesComponent {
    constructor() {
      this.APP_ROUTE = APP_ROUTE;
    }
  };
  _SummariesComponent.\u0275fac = function SummariesComponent_Factory(t) {
    return new (t || _SummariesComponent)();
  };
  _SummariesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SummariesComponent,
    selectors: [["app-summaries"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 11,
    vars: 9,
    consts: [["pageTitle", "Transactions"], [1, "flex", "flex-col", "gap-y-10"], ["header", "Income summary", 3, "link"], ["header", "Recent expenses", 3, "link"], ["header", "Balances", 3, "link"]],
    template: function SummariesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "main", 1)(2, "section");
        \u0275\u0275element(3, "app-section-header", 2)(4, "app-income-overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "section");
        \u0275\u0275element(6, "app-section-header", 3)(7, "app-expense-overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "section");
        \u0275\u0275element(9, "app-section-header", 4)(10, "app-balance-overview");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("link", \u0275\u0275pureFunction1(3, _c0, ctx.APP_ROUTE.incomes));
        \u0275\u0275advance(3);
        \u0275\u0275property("link", \u0275\u0275pureFunction1(5, _c0, ctx.APP_ROUTE.expenses));
        \u0275\u0275advance(3);
        \u0275\u0275property("link", \u0275\u0275pureFunction1(7, _c0, ctx.APP_ROUTE.balances));
      }
    },
    dependencies: [CommonModule, BalanceOverviewComponent, ExpenseOverviewComponent, SectionHeaderComponent, PageHeaderComponent, IncomeOverviewComponent],
    encapsulation: 2
  });
  let SummariesComponent2 = _SummariesComponent;
  return SummariesComponent2;
})();

// src/app/transaction/income-list/income-list.component.ts
var IncomeListComponent = /* @__PURE__ */ (() => {
  const _IncomeListComponent = class _IncomeListComponent {
  };
  _IncomeListComponent.\u0275fac = function IncomeListComponent_Factory(t) {
    return new (t || _IncomeListComponent)();
  };
  _IncomeListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IncomeListComponent,
    selectors: [["app-income-list"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [["pageTitle", "Income"]],
    template: function IncomeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "p");
        \u0275\u0275text(2, "income-list works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, PageHeaderComponent],
    encapsulation: 2
  });
  let IncomeListComponent2 = _IncomeListComponent;
  return IncomeListComponent2;
})();

// src/app/transaction/balance-list/balance-list.component.ts
var BalanceListComponent = /* @__PURE__ */ (() => {
  const _BalanceListComponent = class _BalanceListComponent {
  };
  _BalanceListComponent.\u0275fac = function BalanceListComponent_Factory(t) {
    return new (t || _BalanceListComponent)();
  };
  _BalanceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BalanceListComponent,
    selectors: [["app-balance-list"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [["pageTitle", "Balances"]],
    template: function BalanceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "p");
        \u0275\u0275text(2, "balance-list works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, PageHeaderComponent],
    encapsulation: 2
  });
  let BalanceListComponent2 = _BalanceListComponent;
  return BalanceListComponent2;
})();

// src/app/transaction/transaction.routes.ts
var transactionRoutes = [{
  path: "",
  title: "Transactions",
  component: TransactionComponent,
  children: [{
    path: "",
    component: SummariesComponent
  }, {
    path: APP_ROUTE.expenses,
    component: ExpenseListComponent,
    children: [{
      path: "create",
      component: CreateTransactionComponent
    }, {
      path: ":id",
      component: TransactionDetailsComponent
    }]
  }, {
    path: APP_ROUTE.incomes,
    component: IncomeListComponent
  }, {
    path: APP_ROUTE.balances,
    component: BalanceListComponent
  }]
}];
export {
  transactionRoutes
};
//# sourceMappingURL=chunk-GPFX6FDB.js.map
