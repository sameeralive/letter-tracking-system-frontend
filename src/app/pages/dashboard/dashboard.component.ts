import {Component, OnInit} from '@angular/core';
import {ToTime} from "../../common/common-functions";
import {Pagination} from "../../models/common.model";
import {DatePipe} from "@angular/common";
import {NbToastrService} from "@nebular/theme";
import Swal from "sweetalert2";
import {Currency} from "../../common/arrays";
import {DashboardServiceService} from "../../services/dashboard-service.service";
import {environment} from "../../../environments/environment";
import {LetterRegistryService} from "../../services/letter-registry.service";
import {LetterRegistrySearch} from "../../models/letter-registry.model";

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  branch: any;
  date = new Date();
  registries: any[] = [];
  loading: boolean = false;
  loading1: boolean = false;
  loading2: boolean = false;
  loading3: boolean = false;
  pagination: Pagination = new Pagination();
  summaryCount: any;
  projectCount: any;
  last7DaysIncom: any;
  last7DaysAppointments: any;
  currency = Currency;
  search: LetterRegistrySearch = new LetterRegistrySearch();


  paymentChart: any = {}
  appointmentChart: any = {}


  constructor(
    private datePipe: DatePipe,
    private toastrService: NbToastrService,
    private dashboardServiceService: DashboardServiceService,
    private letterRegistryService: LetterRegistryService,
  ) {
  }

  ngOnInit(): void {
    this.getSummaryCount();
    this.getProjectCount();
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

  getSummaryCount() {
    this.loading1 = true;
    this.dashboardServiceService.getSummaryCount({branch: this.branch}).subscribe(response => {
      this.summaryCount = response;
      this.loading1 = false;
    }, error => {
      // this.handleError(error);
      this.loading1 = false;
    });
  }

  getProjectCount() {
    this.loading1 = true;
    this.dashboardServiceService.getProjectCount().subscribe(response => {
      this.projectCount = response;
      this.loading1 = false;
    }, error => {
      // this.handleError(error);
      this.loading1 = false;
    });
  }

  // getLast7DaysIncome() {
  //   this.loading2 = true;
  //   this.dashboardServiceService.getLast7DaysIncome({branch: this.branch}).subscribe(response => {
  //     this.last7DaysIncom = response;
  //     this.paymentChart = {
  //       type: 'bar',
  //       data: {
  //         labels: [],
  //         datasets: [
  //           {
  //             label: "Income",
  //             data: [],
  //             backgroundColor: '#007bff',
  //             borderColor: '#002aff',
  //             borderWidth: 2,
  //           }
  //         ]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         aspectRatio: 1,
  //         scales: {
  //           yAxes: [{
  //             ticks: {
  //               fixedStepSize: 10000,
  //             },
  //           }]
  //         },
  //       },
  //     }
  //     this.last7DaysIncom.forEach((el, i) => {
  //       this.paymentChart.data.labels.push(this.datePipe.transform(el.date,"yyyy-MM-dd"));
  //       this.paymentChart.data.datasets[0]['data'].push(el.total);
  //     });
  //     this.loading2 = false;
  //   }, error => {
  //     this.handleError(error);
  //     this.loading2 = false;
  //   });
  // }
  //
  // getLast7DaysAppointments(){
  //   this.loading3 = true;
  //   this.dashboardServiceService.getLast7DaysAppointments({branch: this.branch}).subscribe(response => {
  //     this.last7DaysAppointments = response;
  //     this.appointmentChart = {
  //       type: 'line',
  //       data: {
  //         labels: [],
  //         datasets: [
  //           {
  //             label: "Appointments",
  //             data: [],
  //             borderColor: '#002aff',
  //             backgroundColor: 'rgba(0,123,255, 0.3)',
  //             borderWidth: 2,
  //           }
  //         ]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         aspectRatio: 1,
  //         scales: {
  //           yAxes: [{
  //             ticks: {
  //               fixedStepSize: 10,
  //             },
  //           }]
  //         },
  //       },
  //     }
  //     this.last7DaysAppointments.forEach((el, i) => {
  //       this.appointmentChart.data.labels.push(this.datePipe.transform(el.date,"yyyy-MM-dd"));
  //       this.appointmentChart.data.datasets[0]['data'].push(el.total);
  //     });
  //     this.loading3 = false;
  //   }, error => {
  //     this.handleError(error);
  //     this.loading3 = false;
  //   });
  // }

  handleError(error) {
    console.log(error.error.message);
    this.toastrService.danger('Something went wrong', 'Error!', {duration: 4000, destroyByClick: true});
  }


  protected readonly environment = environment;
}
