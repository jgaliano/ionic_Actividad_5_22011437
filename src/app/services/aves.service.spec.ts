import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvesService {
  private apiUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:guatemala';

  constructor(private http: HttpClient) {}

  getAves(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
