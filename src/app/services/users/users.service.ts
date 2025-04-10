import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = `${environment.apiUrl}/users`; 
  constructor(private httpClient: HttpClient) { }

  public getUserInfo(): Observable<any> {
    // Get the token from localStorage or cookie (depending on how you store it after login)
    const token = localStorage.getItem('token'); // Replace with the actual token storage method

    // Set the Authorization header with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the GET request to the backend route and return the observable
    const url = `${this.baseUrl}/userInfo`;
    return this.httpClient.get(url , { headers });
  }

  public premium(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/modify`;
    
    // Put request with null body but with headers
    return this.httpClient.put(url, null, { headers, withCredentials: true });
  }
  
}
