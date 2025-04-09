import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url = environment.apiUrl
  path = "/users/userInfo"
  constructor(private httpClient: HttpClient) { }

  public getUserInfo(): Observable<any> {
    // Get the token from localStorage or cookie (depending on how you store it after login)
    const token = localStorage.getItem('token'); // Replace with the actual token storage method

    // Set the Authorization header with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the GET request to the backend route and return the observable
    return this.httpClient.get(this.url + this.path, { headers });
  }
}
