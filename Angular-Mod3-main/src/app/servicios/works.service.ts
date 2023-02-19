import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Works } from '../model/works';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  //Local
  //workURL='http://localhost:8080/proyectos/'
  //Deploy
  workURL='https://backendwaldi.onrender.com/proyectos/'

  

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Works[]> {
    return this.httpClient.get<Works[]>(this.workURL + 'lista');
  }

  public detail(id:number): Observable<Works>{
    return this.httpClient.get<Works>(this.workURL + `detail/${id}`);
  }

  public save(works: Works): Observable<any>{
    return this.httpClient.post<any>(this.workURL + 'create',works);
  }

  public update(id:number,works:Works): Observable<any>{
    return this.httpClient.put<any>(this.workURL + `update/${id}`, works);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.workURL + `delete/${id}`);
  }
}