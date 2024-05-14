import { Component, OnInit } from '@angular/core';
import {LetterRegistrySearch} from "../../../models/letter-registry.model";
import {Pagination} from "../../../models/common.model";
import {LetterRegistryService} from "../../../services/letter-registry.service";

@Component({
  selector: 'ngx-letter-registry-list',
  templateUrl: './letter-registry-list.component.html',
  styleUrls: ['./letter-registry-list.component.scss']
})
export class LetterRegistryListComponent implements OnInit {
  loading: boolean = false;
  search: LetterRegistrySearch = new LetterRegistrySearch();
  registries: any[] = [];
  pagination: Pagination = new Pagination();


  constructor(
    private letterRegistryService: LetterRegistryService
  ) { }

  ngOnInit(): void {
    this.getRegistryList(1);
  }

  getRegistryList(event: number) {
    this.loading = true;
    this.pagination.current_page = event;
    this.pagination.filter = this.search;
    this.letterRegistryService.getRegistryList(this.pagination).subscribe((response: any) => {
      this.registries = response.data;
      this.pagination.total = response.total;
      this.loading = false;
    }, error => {
      // this.handleError(error);
      this.loading = false;
    });
  }

  clear() {
    this.search = new LetterRegistrySearch();
    this.getRegistryList(1)
  }
}
