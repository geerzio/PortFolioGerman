import { Injectable } from '@angular/core';
import { WorkModel } from '../models/works.model';
import { WORKS } from 'src/assets/files/mock-works';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  works:WorkModel[]  = WORKS;
  private url = 'api/works'; 

  constructor(private http: HttpClient) { }

  /*getWorks():Observable<WorkModel[]>{

    //const trabajo = of(WORKS);
    
    return this.http.get<WorkModel[]>(this.url);
  }*/

  getWorks(): Observable<WorkModel[]> {
    // Retorna los datos mock
    return of(WORKS);
  }
}
