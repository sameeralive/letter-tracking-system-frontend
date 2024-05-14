import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  login = {
    email: null,
    password: null,
  };

  error = null;

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.login).subscribe(data => {
      this.handleResponse(data);
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigate(['/pages/dashboard']);
  }

}
