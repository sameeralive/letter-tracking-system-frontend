import { Component, OnInit } from '@angular/core';
import {LetterRegistryService} from "../../../services/letter-registry.service";
import {LetterRegistry} from "../../../models/letter-registry.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'ngx-letter-registry-create',
  templateUrl: './letter-registry-create.component.html',
  styleUrls: ['./letter-registry-create.component.scss']
})
export class LetterRegistryCreateComponent implements OnInit {

  registry: LetterRegistry = new LetterRegistry();
  isDisabled: boolean = false;
  error: any = {};
  letter: any = null;
  replyLetter: any = null;

  constructor(
    private letterRegistryService: LetterRegistryService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  submit() {
    let formData: FormData = new FormData();
    this.replyLetter.date = this.datePipe.transform(this.replyLetter.date, 'yyyy-mm-dd');
    if (this.replyLetter.reply_date) {
      this.replyLetter.reply_date = this.datePipe.transform(this.replyLetter.reply_date, 'yyyy-mm-dd');
    }
    formData.append('data', JSON.stringify(this.registry));
    formData.append('letter', this.letter);
    formData.append('reply_letter', this.replyLetter);
    this.letterRegistryService.createRegistry(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {},
    })

  }

  uploadLetter(event: any) {
    this.letter = event.target.files[0];
  }

  uploadReplyLetter(event: any) {
    this.replyLetter = event.target.files[0];
  }
}
