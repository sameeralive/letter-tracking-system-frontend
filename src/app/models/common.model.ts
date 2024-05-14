export class Pagination {
  total: number;
  current_page: number;
  per_page: number;
  filter: any;
  constructor() {
    this.per_page = 10;
    this.filter = {};
  }
}
