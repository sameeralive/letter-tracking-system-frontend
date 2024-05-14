import {Component, ElementRef, OnInit} from '@angular/core';
import {LetterRegistryService} from "../../../services/letter-registry.service";
import {LetterRegistry} from "../../../models/letter-registry.model";
import {DatePipe} from "@angular/common";
import {ValidateInput} from "../../../helpers/form-validation";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-letter-registry-create',
  templateUrl: './letter-registry-create.component.html',
  styleUrls: ['./letter-registry-create.component.scss']
})
export class LetterRegistryCreateComponent implements OnInit {

  registry: LetterRegistry = new LetterRegistry();
  existingData: LetterRegistry = new LetterRegistry();
  isDisabled: boolean = false;
  error: any = {};
  letter: any = null;
  replyLetter: any = null;

  constructor(
    private letterRegistryService: LetterRegistryService,
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
    this.letterRegistryService.getRegistryData(id).subscribe( (res: any) => {
      this.registry = res;
      this.existingData = res;
      this.isDisabled = false;
    }, error => {
      this.isDisabled = false;
    })
  }

  submit(form: any) {
    if (ValidateInput(form, this.el, this.toastr)) {
      this.isDisabled = true;
      let formData: FormData = new FormData();
      this.registry.date = this.datePipe.transform(this.registry.date, 'yyyy-mm-dd');
      if (this.registry.reply_date) {
        this.registry.reply_date = this.datePipe.transform(this.registry.reply_date, 'yyyy-mm-dd');
      }
      formData.append('data', JSON.stringify(this.registry));
      formData.append('letter', this.letter);
      formData.append('reply_letter', this.replyLetter);
      this.letterRegistryService.createRegistry(formData).subscribe({
        next: (res: any) => {
          this.toastr.success('Successfully Saved!', `Success`);
          this.router.navigateByUrl('/pages/letter-registry/letter-registry-list')
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
