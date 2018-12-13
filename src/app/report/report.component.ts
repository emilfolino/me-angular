import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [ ReportService ],
})
export class ReportComponent implements OnInit {
  kmom: string;
  questions: object;
  private subscription: any;

  constructor(private reportService: ReportService,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.kmom = params["kmom"];

      this.reportService.fetchReport(this.kmom)
        .subscribe((data) => {
          this.questions = data.data;
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
