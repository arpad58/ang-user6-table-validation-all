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

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
   delUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.serverAddress}/${user.id}`);
  }

  /* editor */
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.serverAddress}/${id}`);
  }

  /* editor create update */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverAddress}`, user);
  }

  /* editor create update */
  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.serverAddress}/${user.id}`, user);
  }
}
