import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-one-column-layout',
  templateUrl: './one-column.layout.html',
  styleUrls: ['./one-column.layout.scss'],
})
export class OneColumnLayoutComponent {
  url: string[];

  constructor(private router: Router) {
    this.url = router.url.split('/');
  }
}
