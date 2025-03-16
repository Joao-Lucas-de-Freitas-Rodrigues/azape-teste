import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDashboard(page: number = 1, limit: number = 20): Observable<any> {
    return this.http.get(`${this.baseUrl}/proof/dashboard?page=${page}&limit=${limit}`);
  }
}
