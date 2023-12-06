import "./chunk-E2VLJGTN.js";
import "./chunk-4JUXVHXJ.js";
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

// src/app/dashboard/dashboard.component.ts
var DashboardComponent = /* @__PURE__ */ (() => {
  const _DashboardComponent = class _DashboardComponent {
  };
  _DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)();
  };
  _DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DashboardComponent,
    selectors: [["app-dashboard"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [[1, "p-4"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, RouterOutlet],
    encapsulation: 2
  });
  let DashboardComponent2 = _DashboardComponent;
  return DashboardComponent2;
})();

// src/app/dashboard/insights/insights.component.ts
var InsightsComponent = /* @__PURE__ */ (() => {
  const _InsightsComponent = class _InsightsComponent {
  };
  _InsightsComponent.\u0275fac = function InsightsComponent_Factory(t) {
    return new (t || _InsightsComponent)();
  };
  _InsightsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InsightsComponent,
    selectors: [["app-insights"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    template: function InsightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "insights works!");
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let InsightsComponent2 = _InsightsComponent;
  return InsightsComponent2;
})();

// src/app/dashboard/dashboard.routes.ts
var dashboardRoutes = [{
  path: "",
  title: "Dashboard",
  component: DashboardComponent,
  children: [{
    path: "",
    component: InsightsComponent
  }]
}];
export {
  dashboardRoutes
};
//# sourceMappingURL=chunk-AUBZQ3XU.js.map
