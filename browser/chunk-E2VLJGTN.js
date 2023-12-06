import {
  SvgIconComponent
} from "./chunk-4JUXVHXJ.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZD6PR3E5.js";

// src/app/transaction/expense-overview/expense-overview.component.ts
var ExpenseOverviewComponent = /* @__PURE__ */ (() => {
  const _ExpenseOverviewComponent = class _ExpenseOverviewComponent {
  };
  _ExpenseOverviewComponent.\u0275fac = function ExpenseOverviewComponent_Factory(t) {
    return new (t || _ExpenseOverviewComponent)();
  };
  _ExpenseOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExpenseOverviewComponent,
    selectors: [["app-expense-overview"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function ExpenseOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "expense-overview works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let ExpenseOverviewComponent2 = _ExpenseOverviewComponent;
  return ExpenseOverviewComponent2;
})();

// src/app/shared/components/secondary-nav/secondary-nav.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function SecondaryNavComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275element(1, "app-svg-icon", 2);
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const navItem_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", navItem_r1.path);
    \u0275\u0275advance(1);
    \u0275\u0275property("iconName", navItem_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", navItem_r1.label, " ");
  }
}
var SecondaryNavComponent = /* @__PURE__ */ (() => {
  const _SecondaryNavComponent = class _SecondaryNavComponent {
  };
  _SecondaryNavComponent.\u0275fac = function SecondaryNavComponent_Factory(t) {
    return new (t || _SecondaryNavComponent)();
  };
  _SecondaryNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SecondaryNavComponent,
    selectors: [["app-secondary-nav"]],
    inputs: {
      navItems: "navItems"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "w-fit", "py-4", "flex", "justify-around", "items-center", "px-6", "rounded-lg", "shadow-lg", "gap-x-6", "bg-white", "absolute", "bottom-16", "right-2"], ["routerLinkActive", "opacity-90 text-accent [&>*:nth-child(2)]:inline-block", 1, "flex", "items-center", "opacity-50", 3, "routerLink"], [3, "iconName"], [1, "capitalize", "ml-2", "hidden"], ["class", "flex items-center opacity-50", "routerLinkActive", "opacity-90 text-accent [&>*:nth-child(2)]:inline-block", 3, "routerLink"]],
    template: function SecondaryNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275repeaterCreate(1, SecondaryNavComponent_For_2_Template, 4, 3, "a", 4, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275repeater(1, ctx.navItems);
      }
    },
    dependencies: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
    encapsulation: 2
  });
  let SecondaryNavComponent2 = _SecondaryNavComponent;
  return SecondaryNavComponent2;
})();

// src/app/transaction/balance-overview/balance-overview.component.ts
var BalanceOverviewComponent = /* @__PURE__ */ (() => {
  const _BalanceOverviewComponent = class _BalanceOverviewComponent {
  };
  _BalanceOverviewComponent.\u0275fac = function BalanceOverviewComponent_Factory(t) {
    return new (t || _BalanceOverviewComponent)();
  };
  _BalanceOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BalanceOverviewComponent,
    selectors: [["app-balance-overview"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function BalanceOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "balances-overview works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let BalanceOverviewComponent2 = _BalanceOverviewComponent;
  return BalanceOverviewComponent2;
})();

export {
  ExpenseOverviewComponent,
  SecondaryNavComponent,
  BalanceOverviewComponent
};
//# sourceMappingURL=chunk-E2VLJGTN.js.map
