import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../services/token.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  userPictureOnly: boolean = false;
  user: any;

  currentTheme = 'default';

  userMenu = [ { title: 'Profile', link: '/profile' }, { title: 'Log out', link: ''} ];
  isDropdownShow: boolean = false;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public authService: AuthService,
              private router: Router,
              private token: TokenService
  ) {
  }

  ngOnInit() {
    const { xl } = this.breakpointService.getBreakpointsMap();
  }

  ngOnDestroy() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/admin/login');
  }
}
