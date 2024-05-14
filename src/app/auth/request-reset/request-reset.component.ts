import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'ngx-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss'],
})
export class RequestResetComponent implements OnInit {
  requestReset = {
    email: null,
  };

  constructor(
    private authService: AuthService,
    private notify: SnotifyService,
  ) {
  }

  ngOnInit(): void {
  }

  requestResetSubmit() {
    this.notify.info('Wait...', {timeout: 5000});
    this.authService.sendPasswordResetLink(this.requestReset).subscribe(data => {
      this.handleResponse(data);
    }, error => {
      this.handleError(error);
    });
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout: 0});
    this.requestReset.email = null;
  }

  handleError(error: any) {
    this.notify.error(error.error.error);
  }
}
