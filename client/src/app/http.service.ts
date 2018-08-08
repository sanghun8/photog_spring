import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private _http: HttpClient) { }

  getUser(id: number): Observable<Object> {
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this._http.get(`${this.baseUrl}`);
  }

  getUsersByAge(age: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
