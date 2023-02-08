import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //Local
//eduURL = 'http://localhost:8080/educacion/';

//Render
eduURL='https://backendwaldi.onrender.com/educacion/';
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create',educacion);
  }

  public update(id:number,educacion:Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, educacion);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
