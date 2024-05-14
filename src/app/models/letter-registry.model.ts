import {int} from "@zxing/library/es2015/customTypings";

export class LetterRegistry {
  id: number;
  date: string = '';
  portfolio_number: string = '';
  letter_ref_number: string = '';
  description: string = '';
  contract_number: string = '';
  project_reference: string = '';
  remarks: string = '';
  letter: string = '';
  reply_date: string = '';
  reply_letter: string = '';
  is_active: number = 1;
}

export class LetterRegistrySearch {
  id: number;
  fromDate: string = '';
  toDate: string = '';
  portfolio_number: string = '';
  letter_ref_number: string = '';
  project_reference: string = '';
}
