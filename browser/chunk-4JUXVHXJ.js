import {
  CommonModule,
  DomSanitizer,
  HttpClient,
  Location,
  RouterLink,
  catchError,
  map,
  of,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZD6PR3E5.js";

// src/app/core/services/icon.service.ts
var IconService = /* @__PURE__ */ (() => {
  const _IconService = class _IconService {
    constructor(http) {
      this.http = http;
      this.cache = {};
      this.ROOT_ICON_PATH = "assets/icons";
    }
    getIcon(iconName) {
      if (this.cache[iconName]) {
        return of(this.cache[iconName]);
      }
      return this.http.get(`${this.ROOT_ICON_PATH}/${iconName}.svg`, {
        responseType: "text"
      }).pipe(map((svgContent) => {
        this.cache[iconName] = svgContent.trim();
        return svgContent;
      }), catchError(() => of("")));
    }
  };
  _IconService.\u0275fac = function IconService_Factory(t) {
    return new (t || _IconService)(\u0275\u0275inject(HttpClient));
  };
  _IconService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IconService,
    factory: _IconService.\u0275fac,
    providedIn: "root"
  });
  let IconService2 = _IconService;
  return IconService2;
})();

// src/app/shared/components/svg-icon/svg-icon.component.ts
function SvgIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("w-6 h-6 " + ctx_r0.iconClass);
    \u0275\u0275property("innerHTML", ctx_r0.sanitizedSvgContent, \u0275\u0275sanitizeHtml);
  }
}
var SvgIconComponent = /* @__PURE__ */ (() => {
  const _SvgIconComponent = class _SvgIconComponent {
    constructor(iconService, sanitizer) {
      this.iconService = iconService;
      this.sanitizer = sanitizer;
      this.iconName = "";
      this.iconClass = "";
      this.sanitizedSvgContent = null;
    }
    fetchIcon(name) {
      this.iconService.getIcon(name).subscribe((svgContent) => {
        this.sanitizedSvgContent = svgContent ? this.sanitizer.bypassSecurityTrustHtml(svgContent) : null;
      });
    }
    ngOnInit() {
      this.fetchIcon(this.iconName);
    }
    ngOnChanges() {
      this.fetchIcon(this.iconName);
    }
  };
  _SvgIconComponent.\u0275fac = function SvgIconComponent_Factory(t) {
    return new (t || _SvgIconComponent)(\u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(DomSanitizer));
  };
  _SvgIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SvgIconComponent,
    selectors: [["app-svg-icon"]],
    inputs: {
      iconName: "iconName",
      iconClass: "iconClass"
    },
    standalone: true,
    features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "class", "innerHTML"], [3, "innerHTML"]],
    template: function SvgIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SvgIconComponent_Conditional_0_Template, 1, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.sanitizedSvgContent ? 0 : -1);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
  let SvgIconComponent2 = _SvgIconComponent;
  return SvgIconComponent2;
})();

// src/app/shared/components/page-header/page-header.component.ts
function PageHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function PageHeaderComponent_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(1, "app-svg-icon", 5);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
}
var PageHeaderComponent = /* @__PURE__ */ (() => {
  const _PageHeaderComponent = class _PageHeaderComponent {
    constructor(location) {
      this.location = location;
    }
    goBack() {
      this.location.back();
    }
  };
  _PageHeaderComponent.\u0275fac = function PageHeaderComponent_Factory(t) {
    return new (t || _PageHeaderComponent)(\u0275\u0275directiveInject(Location));
  };
  _PageHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PageHeaderComponent,
    selectors: [["app-page-header"]],
    inputs: {
      pageTitle: "pageTitle",
      hideBackButton: "hideBackButton"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 5,
    vars: 2,
    consts: [[1, "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-x-4"], ["routerLink", "javascript:void(0)", "class", "text-secondary-100 flex items-center -ml-2"], [1, "text-3xl"], ["routerLink", "javascript:void(0)", 1, "text-secondary-100", "flex", "items-center", "-ml-2", 3, "click"], ["iconName", "chevron-left", "iconClass", "w-6 h-6"]],
    template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
        \u0275\u0275template(2, PageHeaderComponent_Conditional_2_Template, 4, 0, "a", 2);
        \u0275\u0275elementStart(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, !ctx.hideBackButton ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageTitle);
      }
    },
    dependencies: [CommonModule, RouterLink, SvgIconComponent],
    encapsulation: 2
  });
  let PageHeaderComponent2 = _PageHeaderComponent;
  return PageHeaderComponent2;
})();

export {
  SvgIconComponent,
  PageHeaderComponent
};
//# sourceMappingURL=chunk-4JUXVHXJ.js.map
