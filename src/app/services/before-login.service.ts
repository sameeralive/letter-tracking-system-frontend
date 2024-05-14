import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeforeLoginService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenService.loggedIn()) {
      return !this.tokenService.loggedIn();
    } else {
      this.router.navigate(['/pages']);
      return false;
    }
  }

}
