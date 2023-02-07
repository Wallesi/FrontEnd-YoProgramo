import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Works } from '../model/works';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  //Local
  eduURL='http://localhost:8080/proyectos/'
  //Deploy
  //eduURL='https://backendwaldi.onrender.com/proyectos/'

  

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Works[]> {
    return this.httpClient.get<Works[]>(this.eduURL + 'lista');
  }

  public detail(id:number): Observable<Works>{
    return this.httpClient.get<Works>(this.eduURL + `detail/${id}`);
  }

  public save(works: Works): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create',works);
  }

  public update(id:number,works:Works): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, works);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}