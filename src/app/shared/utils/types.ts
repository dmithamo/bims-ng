export type AppPath = `/${string}`;
export type AppNavItem = {
  path: AppPath;
  name: string;
  icon: string;
  permissions: string[];
};

export type AppLinkTab = {
  path: AppPath;
};
