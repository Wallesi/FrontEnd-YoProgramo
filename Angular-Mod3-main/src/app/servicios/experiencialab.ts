import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencialab } from '../model/experiencialab';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialabService {
  //Local
  //expeURL = 'http://localhost:8080/experiencia/';

  //Render
  expeURL='https://backendwaldi.onrender.com/experiencia/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencialab[]> {
    return this.httpClient.get<Experiencialab[]>(this.expeURL + 'lista');
  }

  public detail(id:number): Observable<Experiencialab>{
    return this.httpClient.get<Experiencialab>(this.expeURL + `detail/${id}`);
  }

  public save(experiencialab: Experiencialab): Observable<any>{
    return this.httpClient.post<any>(this.expeURL + 'create',experiencialab);
  }

  public update(id:number,experiencialab:Experiencialab): Observable<any>{
    return this.httpClient.put<any>(this.expeURL + `update/${id}`, experiencialab);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expeURL + `delete/${id}`);
  }
}