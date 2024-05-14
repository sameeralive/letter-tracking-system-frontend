import {UserPermission} from "./user-permission.model";

export class UserRole {
  id: number;
  role_name: string;
  role_description: string;
  permissions: UserPermission[];
  toBeDeletePermissions: UserPermission[];

  constructor() {
    this.permissions = [];
    this.toBeDeletePermissions = [];
  }
}

export class UserRoleSearch {
  id: number;
  role_name: string;

  constructor() {
  }
}
