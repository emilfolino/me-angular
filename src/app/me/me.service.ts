import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Me {
  name: string;
  city: string;
  description: string;
}

@Injectable()
export class MeService {
  constructor(private http: HttpClient) { }

  fetchMe() {
    return this.http.get<Me>("https://me-api.emilfolino.se");
  }
}
