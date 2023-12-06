import {
  AuthService,
  MainFooterComponent,
  environment
} from "./chunk-AYGNVBYT.js";
import {
  APP_ROUTE
} from "./chunk-QLHHM3FY.js";
import {
  SvgIconComponent
} from "./chunk-4JUXVHXJ.js";
import {
  CommonModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  __async,
  bootstrapApplication,
  inject,
  provideHttpClient,
  provideRouter,
  withComponentInputBinding,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZD6PR3E5.js";

// src/app/not-found/not-found.component.ts
var NotFoundComponent = /* @__PURE__ */ (() => {
  const _NotFoundComponent = class _NotFoundComponent {
  };
  _NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(t) {
    return new (t || _NotFoundComponent)();
  };
  _NotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NotFoundComponent,
    selectors: [["app-not-found"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 9,
    vars: 0,
    consts: [[1, "flex", "flex-col", "h-full", "justify-around", "items-center"], [1, "flex", "flex-col"], [1, "mt-2", "text-2xl", "font-black"], [1, "opacity-50"], [1, "italic"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Page Not Found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, " We couldn't find that page. ");
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Not even with x-ray vision!");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(8, "app-main-footer");
      }
    },
    dependencies: [CommonModule, MainFooterComponent],
    encapsulation: 2
  });
  let NotFoundComponent2 = _NotFoundComponent;
  return NotFoundComponent2;
})();

// src/app/_guards/auth/logged-in.guard.ts
var loggedInGuard = (route, state) => __async(void 0, null, function* () {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedOut = !(yield authService.isLoggedIn());
  if (isLoggedOut) {
    yield router.navigate([APP_ROUTE.auth, APP_ROUTE.login], {
      queryParams: {
        redirectTo: state.url || void 0
      }
    });
    return false;
  }
  return true;
});

// src/app/_guards/auth/logged-out.guard.ts
var loggedOutGuard = () => __async(void 0, null, function* () {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = yield authService.isLoggedIn();
  if (isLoggedIn) {
    yield router.navigate([APP_ROUTE.dashboard]);
    return false;
  }
  return true;
});

// src/app/app.routes.ts
var routes = [{
  path: APP_ROUTE.auth,
  canActivate: [loggedOutGuard],
  loadChildren: () => import("./chunk-OVG5FHCR.js").then((m) => m.authRoutes)
}, {
  path: "",
  canActivate: [loggedInGuard],
  children: [{
    path: APP_ROUTE.dashboard,
    loadChildren: () => import("./chunk-AUBZQ3XU.js").then((m) => m.dashboardRoutes)
  }, {
    path: APP_ROUTE.budgets,
    loadChildren: () => import("./chunk-X3VDNV3H.js").then((m) => m.budgetRoutes)
  }, {
    path: APP_ROUTE.transactions,
    loadChildren: () => import("./chunk-GPFX6FDB.js").then((m) => m.transactionRoutes)
  }]
}, {
  path: "**",
  component: NotFoundComponent
}];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient()]
};

// src/app/shared/components/main-nav/main-nav.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function MainNavComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275element(1, "app-svg-icon", 3);
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const navItem_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", navItem_r2.path);
    \u0275\u0275advance(1);
    \u0275\u0275property("iconName", navItem_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", navItem_r2.label, " ");
  }
}
function MainNavComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 1);
    \u0275\u0275repeaterCreate(1, MainNavComponent_Conditional_0_For_2_Template, 4, 3, "a", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(1, ctx_r0.navItems);
  }
}
var MainNavComponent = /* @__PURE__ */ (() => {
  const _MainNavComponent = class _MainNavComponent {
    constructor(router, authService) {
      this.router = router;
      this.authService = authService;
      this.navItems = [{
        path: APP_ROUTE.dashboard,
        label: "dashboard",
        icon: "chart-present",
        permissions: []
      }, {
        path: APP_ROUTE.transactions,
        label: "transactions",
        icon: "card",
        permissions: []
      }, {
        path: APP_ROUTE.budgets,
        label: "budgets",
        icon: "clipboard",
        permissions: []
      }, {
        path: APP_ROUTE.profile,
        label: "profile",
        icon: "user",
        permissions: []
      }];
    }
  };
  _MainNavComponent.\u0275fac = function MainNavComponent_Factory(t) {
    return new (t || _MainNavComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  _MainNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MainNavComponent,
    selectors: [["app-main-nav"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "flex justify-between items-center px-6 py-4 bg-white shadow-elevated"], [1, "flex", "justify-between", "items-center", "px-6", "py-4", "bg-white", "shadow-elevated"], ["routerLinkActive", "opacity-90 text-accent [&>*:nth-child(2)]:inline-block", 1, "flex", "items-center", "opacity-50", "nth-child(2)", 3, "routerLink"], [3, "iconName"], [1, "capitalize", "ml-2", "hidden"], ["class", "flex items-center opacity-50 nth-child(2)", "routerLinkActive", "opacity-90 text-accent [&>*:nth-child(2)]:inline-block", 3, "routerLink"]],
    template: function MainNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MainNavComponent_Conditional_0_Template, 3, 0, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.authService.isLoggedIn() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
    encapsulation: 2
  });
  let MainNavComponent2 = _MainNavComponent;
  return MainNavComponent2;
})();

// src/app/app.component.ts
var AppComponent = /* @__PURE__ */ (() => {
  const _AppComponent = class _AppComponent {
    constructor() {
      this.title = "bims";
      this.version = environment.version;
    }
  };
  _AppComponent.\u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  _AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 5,
    vars: 0,
    consts: [[1, "w-full", "sm:w-2/3", "flex", "flex-col", "relative", "bg-slate-100"], [1, "relative", "h-screen", "flex", "flex-col"], [1, "flex-1"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "section", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-main-nav");
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CommonModule, RouterOutlet, MainNavComponent],
    encapsulation: 2
  });
  let AppComponent2 = _AppComponent;
  return AppComponent2;
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
