import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.api + 'auth/';

  constructor(private http: HttpClient) {}

  /* todo: response model. waiting for swagger update */
  /* todo: react on output: error message on input */
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url + 'signin', { username, password });
  }
}
