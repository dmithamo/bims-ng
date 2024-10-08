export type SessionUser = {
  username: string;
  permissions: string[];
  avatar?: string;
};

export type SessionId = `${string}-${string}-${string}-${string}`;

export enum UserRole {
  superAdmin = 'super-admin',
  admin = 'admin',
  user = 'user',
}

export type Credentials = {
  username: string;
  password: string;
};

export type AuthError = {
  message: string;
};
