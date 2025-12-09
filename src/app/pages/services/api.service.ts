import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  

    get<T>(fileKey: string): Observable<T> {
      const url = `assets/json/${fileKey}.json`;
      return this.http.get<T>(url);
    }

}
