import { Component, OnInit } from '@angular/core';
import {Pagination} from "../../../models/common.model";
import {ProjectSearch} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'ngx-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  loading: boolean = false;
  search: ProjectSearch = new ProjectSearch();
  projects: any[] = [];
  pagination: Pagination = new Pagination();


  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjectList(1);
  }

  getProjectList(event: number) {
    this.loading = true;
    this.pagination.current_page = event;
    this.pagination.filter = this.search;
    this.projectService.getProjectList(this.pagination).subscribe((response: any) => {
      this.projects = response.data;
      this.pagination.total = response.total;
      this.loading = false;
    }, error => {
      // this.handleError(error);
      this.loading = false;
    });
  }

  clear() {
    this.search = new ProjectSearch();
    this.getProjectList(1)
  }

}
