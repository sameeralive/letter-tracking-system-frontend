import { Component, OnInit } from '@angular/core';
import {LetterRegistrySearch} from "../../../models/letter-registry.model";
import {Pagination} from "../../../models/common.model";
import {LetterRegistryService} from "../../../services/letter-registry.service";
import {ProjectService} from "../../../services/project.service";
import {environment, root_url} from "../../../../environments/environment";

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
  projects: any[] = [];
  environment = environment;


  constructor(
    private letterRegistryService: LetterRegistryService,
    private projectService: ProjectService
  ) {
    this.getAllProjects();
  }

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


  getAllProjects(){
    this.projectService.getAllProjects().subscribe({
      next: (data: any) => {
        this.projects = data;
      },
      error: () => {}
    })
  }

  clear() {
    this.search = new LetterRegistrySearch();
    this.getRegistryList(1)
  }

}
