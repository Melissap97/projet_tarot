import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiragesService {
  private baseUrl = `${environment.apiUrl}/tirages`; // Base URL for all tirages-related endpoints

  constructor(private http: HttpClient) {}

  // Method for creating a new tirage
  public createTirage(): Observable<any> {
    const url = `${this.baseUrl}/nouveauTirage`; 
    return this.http.post(url, {}, { withCredentials: true });
  }

  public getTirageParUser(): Observable<any> {
    const url = `${this.baseUrl}/tirageParUser`;
    return this.http.get(url, { withCredentials: true });
  }

  public deleteTirage(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`; 
    return this.http.delete(url, { withCredentials: true });
  }

}
