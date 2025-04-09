import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartesService {
private baseUrl = `${environment.apiUrl}/cartes`; 

  constructor(private http: HttpClient) {}
  
  public getCartes(): Observable<any> {
      const url = `${this.baseUrl}/cartes`;
      return this.http.get(url, { withCredentials: true });
    }

    public getCartesPremium(): Observable<any> {
      const url = `${this.baseUrl}/premium`;
      return this.http.get(url, { withCredentials: true });
    }

}
