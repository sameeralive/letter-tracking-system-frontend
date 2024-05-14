export class Appointment {
  id: number;
  branch_id: number;
  patient_id: number;
  doctor_id: number;
  date: any;
  time: number;
  type: string;
  status: string;
  created_by: number;
  updated_by: number;

  constructor() {
    this.status = 'Pending';
    this.type = 'Portal';
    this.doctor_id = 0;
  }
}

export class AppointmentSearch {
  id: number;
  branch_id: number;
  fromDate: any;
  toDate: any;
  nic: string;
}

