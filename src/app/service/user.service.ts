import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* table */
  serverAddress: string = 'http://localhost:3000/users'

  constructor(
    private http: HttpClient     /* table */
  ) { }

  /* table */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverAddress}`);
  }
}
