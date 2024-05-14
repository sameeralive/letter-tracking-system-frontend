import {Component, OnInit} from '@angular/core';
import {TokenService} from '../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['auth.component.scss'],
  template: `
    <ngx-one-column-layout>
    <ng-snotify></ng-snotify>
    <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AuthComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) {

  }

  ngOnInit(): void {

  }

}
