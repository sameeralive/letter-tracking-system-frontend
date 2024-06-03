export class LetterRegistry {
  id: number;
  date: any = "";
  portfolio_number: string = "";
  letter_ref_number: string = "";
  description: string = "";
  contract_number: string = "";
  project_id: any = 0;
  project_reference: string = "";
  remarks: string = "";
  letter: string = "";
  reply_date: any = "";
  reply_letter: string = "";
  is_active: number = 1;
}

export class LetterRegistrySearch {
  id: number;
  fromDate: string = "";
  toDate: string = "";
  portfolio_number: string = "";
  letter_ref_number: string = "";
  contract_number: string = "";
  project_id: string = "";
  project_reference: string = "";
}
