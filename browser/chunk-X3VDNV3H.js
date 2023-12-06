import {
  CommonModule,
  RouterOutlet,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ZD6PR3E5.js";

// src/app/budget/budget-list/budget-list.component.ts
var BudgetListComponent = /* @__PURE__ */ (() => {
  const _BudgetListComponent = class _BudgetListComponent {
  };
  _BudgetListComponent.\u0275fac = function BudgetListComponent_Factory(t) {
    return new (t || _BudgetListComponent)();
  };
  _BudgetListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BudgetListComponent,
    selectors: [["app-budget-list"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function BudgetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "budget-list works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let BudgetListComponent2 = _BudgetListComponent;
  return BudgetListComponent2;
})();

// src/app/budget/create-budget/create-budget.component.ts
var CreateBudgetComponent = /* @__PURE__ */ (() => {
  const _CreateBudgetComponent = class _CreateBudgetComponent {
  };
  _CreateBudgetComponent.\u0275fac = function CreateBudgetComponent_Factory(t) {
    return new (t || _CreateBudgetComponent)();
  };
  _CreateBudgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CreateBudgetComponent,
    selectors: [["app-create-budget"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function CreateBudgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "create-budget works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let CreateBudgetComponent2 = _CreateBudgetComponent;
  return CreateBudgetComponent2;
})();

// src/app/budget/budget-details/budget-details.component.ts
var BudgetDetailsComponent = /* @__PURE__ */ (() => {
  const _BudgetDetailsComponent = class _BudgetDetailsComponent {
  };
  _BudgetDetailsComponent.\u0275fac = function BudgetDetailsComponent_Factory(t) {
    return new (t || _BudgetDetailsComponent)();
  };
  _BudgetDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BudgetDetailsComponent,
    selectors: [["app-budget-details"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function BudgetDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "budget-details works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let BudgetDetailsComponent2 = _BudgetDetailsComponent;
  return BudgetDetailsComponent2;
})();

// src/app/budget/budget.component.ts
var BudgetComponent = /* @__PURE__ */ (() => {
  const _BudgetComponent = class _BudgetComponent {
  };
  _BudgetComponent.\u0275fac = function BudgetComponent_Factory(t) {
    return new (t || _BudgetComponent)();
  };
  _BudgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BudgetComponent,
    selectors: [["app-budget"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [[1, "p-4"]],
    template: function BudgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, RouterOutlet],
    encapsulation: 2
  });
  let BudgetComponent2 = _BudgetComponent;
  return BudgetComponent2;
})();

// src/app/budget/budget.routes.ts
var budgetRoutes = [{
  path: "",
  title: "Budget",
  component: BudgetComponent,
  children: [{
    path: "list",
    component: BudgetListComponent
  }, {
    path: "create",
    component: CreateBudgetComponent
  }, {
    path: ":id",
    component: BudgetDetailsComponent
  }, {
    path: ":id/edit",
    component: CreateBudgetComponent
  }]
}];
export {
  budgetRoutes
};
//# sourceMappingURL=chunk-X3VDNV3H.js.map
