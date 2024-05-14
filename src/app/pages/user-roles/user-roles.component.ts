import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-users-roles',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UserRolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
