import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getSummaryCount(branch_id) {
    return this.http.post(root_url + 'registry-dashboard-count', branch_id);
  }

  getProjectCount() {
    return this.http.get(root_url + 'project-dashboard-count');
  }

  getLast7DaysIncome(branch_id) {
    return this.http.post(root_url + 'dashboard-last-7-days-income', branch_id);
  }

  getLast7DaysAppointments(branch_id) {
    return this.http.post(root_url + 'dashboard-last-7-days-appointments', branch_id);
  }
}
