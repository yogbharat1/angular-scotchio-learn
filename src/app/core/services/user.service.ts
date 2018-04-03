import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  /**
   * Get all Users
   */
  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }
  /**
   * Get a single User by username
   */
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }
}
