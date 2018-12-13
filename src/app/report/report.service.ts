import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Report {
  data: object;
}

@Injectable()
export class ReportService {
  constructor(private http: HttpClient) { }

  fetchReport(kmom) {
    return this.http.get<Report>("https://me-api.emilfolino.se/reports/" + kmom);
  }
}
