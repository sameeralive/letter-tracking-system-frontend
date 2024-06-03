import { Component, ElementRef, OnInit } from "@angular/core";
import { LetterRegistryService } from "../../../services/letter-registry.service";
import { LetterRegistry } from "../../../models/letter-registry.model";
import { DatePipe } from "@angular/common";
import { ValidateInput } from "../../../helpers/form-validation";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../../../services/project.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "ngx-letter-registry-create",
  templateUrl: "./letter-registry-create.component.html",
  styleUrls: ["./letter-registry-create.component.scss"],
})
export class LetterRegistryCreateComponent implements OnInit {
  registry: LetterRegistry = new LetterRegistry();
  existingData: LetterRegistry = new LetterRegistry();
  isDisabled: boolean = false;
  error: any = {};
  letter: any = null;
  replyLetter: any = null;
  projects: any[] = [];
  environment = environment;

  constructor(
    private letterRegistryService: LetterRegistryService,
    private datePipe: DatePipe,
    private el: ElementRef,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getRegistries(params.id);
      }
    });
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (data: any) => {
        this.projects = data;
      },
      error: () => {},
    });
  }

  getRegistries(id: any) {
    this.isDisabled = true;
    this.letterRegistryService.getRegistryData(id).subscribe(
      (res: any) => {
        this.registry = res;
        this.registry.date = new Date(this.registry.date);
        this.registry.reply_date = new Date(this.registry.reply_date);
        this.existingData = res;
        this.isDisabled = false;
      },
      (error) => {
        this.isDisabled = false;
      }
    );
  }

  submit(form: any) {
    if (ValidateInput(form, this.el, this.toastr)) {
      this.isDisabled = true;
      let formData: FormData = new FormData();
      this.registry.date = this.datePipe.transform(
        this.registry.date,
        "yyyy-MM-dd"
      );
      if (this.registry.reply_date) {
        this.registry.reply_date = this.datePipe.transform(
          this.registry.reply_date,
          "yyyy-MM-dd"
        );
      }
      formData.append("data", JSON.stringify(this.registry));
      formData.append("letter", this.letter);
      formData.append("reply_letter", this.replyLetter);
      this.letterRegistryService
        .createRegistry(formData, this.registry)
        .subscribe({
          next: (res: any) => {
            this.toastr.success("Successfully Saved!", `Success`);
            this.router.navigateByUrl(
              "/pages/letter-registry/letter-registry-list"
            );
          },
          error: () => {},
          complete: () => {
            this.isDisabled = false;
          },
        });
    }
  }

  uploadLetter(event: any) {
    this.letter = event.target.files[0];
  }

  uploadReplyLetter(event: any) {
    this.replyLetter = event.target.files[0];
  }
}
