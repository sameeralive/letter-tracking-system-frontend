import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user-permissions',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UserPermissionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
