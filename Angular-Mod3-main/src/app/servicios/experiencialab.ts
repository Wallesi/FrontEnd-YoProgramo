import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencialab } from '../model/experiencialab';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialabService {
  eduURL='http://localhost:8080/experiencia/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencialab[]> {
    return this.httpClient.get<Experiencialab[]>(this.eduURL + 'lista');
  }

  public detail(id:number): Observable<Experiencialab>{
    return this.httpClient.get<Experiencialab>(this.eduURL + `detail/${id}`);
  }

  public save(experiencialab: Experiencialab): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create',experiencialab);
  }

  public update(id:number,experiencialab:Experiencialab): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, experiencialab);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}