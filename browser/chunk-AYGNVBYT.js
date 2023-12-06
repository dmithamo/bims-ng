import {
  APP_ROUTE
} from "./chunk-QLHHM3FY.js";
import {
  CommonModule,
  RouterLink,
  __async,
  computed,
  signal,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZD6PR3E5.js";

// src/app/shared/components/logo/logo.component.ts
var _c0 = (a1) => ["/", a1];
var LogoComponent = /* @__PURE__ */ (() => {
  const _LogoComponent = class _LogoComponent {
    constructor() {
      this.disableClick = false;
      this.APP_ROUTE = APP_ROUTE;
    }
  };
  _LogoComponent.\u0275fac = function LogoComponent_Factory(t) {
    return new (t || _LogoComponent)();
  };
  _LogoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LogoComponent,
    selectors: [["app-logo"]],
    inputs: {
      disableClick: "disableClick"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 7,
    vars: 3,
    consts: [[1, "flex", "items-center", "gap-4", "text-6xl", "font-bold", "text-accent", 3, "routerLink"], [1, "font-chronos"], [1, "scale-115"]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0)(1, "span", 1);
        \u0275\u0275text(2, "b");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4, "\u2970");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 1);
        \u0275\u0275text(6, "ms");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", ctx.disableClick ? void 0 : \u0275\u0275pureFunction1(1, _c0, ctx.APP_ROUTE.dashboard));
      }
    },
    dependencies: [CommonModule, RouterLink],
    encapsulation: 2
  });
  let LogoComponent2 = _LogoComponent;
  return LogoComponent2;
})();

// src/environments/environment.ts
var environment = {
  // This is automatically rewritten by the update-version command via Git hooks
  version: "1667dd6",
  env: "development",
  apiURL: "https://api.example-development.com"
};

// src/app/shared/components/main-footer/main-footer.component.ts
var MainFooterComponent = /* @__PURE__ */ (() => {
  const _MainFooterComponent = class _MainFooterComponent {
    constructor() {
      this.appVersion = environment.version;
    }
  };
  _MainFooterComponent.\u0275fac = function MainFooterComponent_Factory(t) {
    return new (t || _MainFooterComponent)();
  };
  _MainFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MainFooterComponent,
    selectors: [["app-main-footer"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 12,
    vars: 1,
    consts: [[1, "w-full", "p-6", "text-slate-400", "bg-slate-100"], ["target", "_blank", "rel", "noreferrer", "href", "https://github.com/dmithamo"], [1, "border-b", "border-b-slate-400", "border-dotted"]],
    template: function MainFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0);
        \u0275\u0275element(1, "app-logo");
        \u0275\u0275elementStart(2, "small");
        \u0275\u0275text(3, "\xA9 2023\xA0");
        \u0275\u0275elementStart(4, "a", 1);
        \u0275\u0275text(5, "D Mithamo");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "small");
        \u0275\u0275text(8, " (You are running version ");
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, ") ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.appVersion);
      }
    },
    dependencies: [CommonModule, LogoComponent],
    encapsulation: 2
  });
  let MainFooterComponent2 = _MainFooterComponent;
  return MainFooterComponent2;
})();

// src/app/_services/storage/storage.service.ts
var StorageService = /* @__PURE__ */ (() => {
  const _StorageService = class _StorageService {
    constructor() {
      this.STORAGE_TYPE = localStorage;
      this.sessionId = null;
    }
    get(key) {
      const item = this.STORAGE_TYPE.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      return null;
    }
    set(key, value) {
      this.STORAGE_TYPE.setItem(key, JSON.stringify(value));
    }
    remove(key) {
      this.STORAGE_TYPE.removeItem(key);
    }
    clear() {
      this.STORAGE_TYPE.clear();
    }
  };
  _StorageService.\u0275fac = function StorageService_Factory(t) {
    return new (t || _StorageService)();
  };
  _StorageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StorageService,
    factory: _StorageService.\u0275fac,
    providedIn: "root"
  });
  let StorageService2 = _StorageService;
  return StorageService2;
})();

// src/app/_repositories/auth/auth.repository.ts
var SESSION_ID_KEY = "SESSION_ID";
var AuthRepository = /* @__PURE__ */ (() => {
  const _AuthRepository = class _AuthRepository {
    constructor(storageService) {
      this.storageService = storageService;
    }
    get sessionId() {
      return this.storageService.get(SESSION_ID_KEY);
    }
    getSessionUser() {
      return __async(this, null, function* () {
        const sessionId = this.sessionId;
        if (!sessionId) {
          return null;
        }
        return Promise.resolve(null);
      });
    }
    removeSessionId() {
      this.storageService.remove(SESSION_ID_KEY);
    }
    login(_0) {
      return __async(this, arguments, function* ({
        username,
        password
      }) {
        console.info({
          password
        });
        return Promise.resolve({
          username,
          permissions: []
        });
      });
    }
    createPassword(password, token) {
      console.info(`New password created: ${password}::${token}`);
    }
    requestPasswordResetLink(username) {
      console.info(`Link sent! ${username}`);
    }
  };
  _AuthRepository.\u0275fac = function AuthRepository_Factory(t) {
    return new (t || _AuthRepository)(\u0275\u0275inject(StorageService));
  };
  _AuthRepository.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AuthRepository,
    factory: _AuthRepository.\u0275fac,
    providedIn: "root"
  });
  let AuthRepository2 = _AuthRepository;
  return AuthRepository2;
})();

// src/app/_services/auth/auth.service.ts
var AuthService = /* @__PURE__ */ (() => {
  const _AuthService = class _AuthService {
    constructor(authRepository) {
      this.authRepository = authRepository;
      this.sessionUser = signal(null);
      this.isLoggedIn = computed(() => {
        return !!this.sessionUser();
      });
      this.validateSessionId();
    }
    validateSessionId() {
      return __async(this, null, function* () {
        const sessionId = this.authRepository.sessionId;
        if (!sessionId) {
          yield this.logout();
          return;
        }
        this.sessionUser.set(yield this.authRepository.getSessionUser());
      });
    }
    login(_0) {
      return __async(this, arguments, function* ({
        username,
        password
      }) {
        this.sessionUser.set(yield this.authRepository.login({
          username,
          password
        }));
      });
    }
    logout() {
      return __async(this, null, function* () {
        this.authRepository.removeSessionId();
        this.sessionUser.set(null);
      });
    }
    requestPasswordResetLink(username) {
      return __async(this, null, function* () {
        this.authRepository.requestPasswordResetLink(username);
      });
    }
    createPassword(password, token) {
      return __async(this, null, function* () {
        this.authRepository.createPassword(password, token);
      });
    }
  };
  _AuthService.\u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)(\u0275\u0275inject(AuthRepository));
  };
  _AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AuthService,
    factory: _AuthService.\u0275fac,
    providedIn: "root"
  });
  let AuthService2 = _AuthService;
  return AuthService2;
})();

export {
  environment,
  MainFooterComponent,
  AuthService
};
//# sourceMappingURL=chunk-AYGNVBYT.js.map
