import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiragesService {
  private baseUrl = `${environment.apiUrl}/tirages`; // Base URL for all tirages-related endpoints

  constructor(private http: HttpClient) {}

  // Method for creating a new tirage
  public createTirage(): Observable<any> {
    const url = `${this.baseUrl}/nouveauTirage`; // Append the specific endpoint
    return this.http.post(url, {}, { withCredentials: true });
  }

  public getTirageParUser(): Observable<any> {
    const url = `${this.baseUrl}/tirageParUser`; // Append the specific endpoint
    return this.http.get(url, { withCredentials: true });
  }

}
