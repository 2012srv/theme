import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { forkJoin, Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(path: string): Observable<any> {
    return this.http.get<any>(`${path}`);
  }
  getMultipleData(data: string[]): Observable<any[]> {
    return forkJoin(
      data.map(item => {                        
        return this.http.get<any>(`${item}`)
      })
    )
  }

}
