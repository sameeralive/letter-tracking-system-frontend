import {Component, ElementRef, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidateInput} from "../../../helpers/form-validation";
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'ngx-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  project: Project = new Project();
  existingData: Project = new Project();
  isDisabled: boolean = false;
  error: any = {};
  letter: any = null;
  replyLetter: any = null;

  constructor(
    private letterProjectService: ProjectService,
    private datePipe: DatePipe,
    private el: ElementRef,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id) {
          this.getRegistries(params.id);
        }
      });
  }

  getRegistries(id: any){
    this.isDisabled = true;
    this.letterProjectService.getProjectData(id).subscribe( (res: any) => {
      this.project = res;
      this.existingData = res;
      this.isDisabled = false;
    }, error => {
      this.isDisabled = false;
    })
  }

  submit(form: any) {
    if (ValidateInput(form, this.el, this.toastr)) {
      this.isDisabled = true;
      this.letterProjectService.createProject(this.project).subscribe({
        next: (res: any) => {
          this.toastr.success('Successfully Saved!', `Success`);
          this.router.navigateByUrl('/pages/project/project-list')
        },
        error: () => {
        },
        complete: () => {
          this.isDisabled = false;
        },
      })
    }
  }

  uploadLetter(event: any) {
    this.letter = event.target.files[0];
  }

  uploadReplyLetter(event: any) {
    this.replyLetter = event.target.files[0];
  }
}
