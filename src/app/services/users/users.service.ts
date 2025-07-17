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
    // Obtiens le cookie depuis le localstorage
    const token = localStorage.getItem('token'); 
    // Met l'authentification dans les headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Fait la requête GET pour obtenir les informations de l'utilisateur
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
