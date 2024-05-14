export class User {
  id: number;
  branch_id: number;
  role_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  contact_number: number;
  address_line1: string;
  address_line2: string;

  constructor() {
  }
}

export class SearchUser {
  branch_id: number;
  email: string;
  first_name: string;
  last_name: string;

  constructor() {
  }
}
