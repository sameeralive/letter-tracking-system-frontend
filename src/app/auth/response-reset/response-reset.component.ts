import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'ngx-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss'],
})
export class ResponseResetComponent implements OnInit {

  error: any = {};
  passwordRest = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null,
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private notify: SnotifyService,
  ) {
    activatedRoute.queryParams.subscribe(params => {
      this.passwordRest.resetToken = params['token'];
    });
  }

  ngOnInit(): void {
  }

  resetPassword() {
    this.authService.changePassword(this.passwordRest).subscribe(response => {
      this.handleResponse(response);
    }, error => {
      this.handleError(error);
    });
  }

  handleResponse(response) {
    const _router = this.router;
    this.notify.confirm('Success, Now login with your new password', {
      buttons: [
        {
          text: 'Okay',
          action: toaster => {
            _router.navigateByUrl('/admin/login'),
            this.notify.remove(toaster.id);
          },
        },
      ],
    });
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
