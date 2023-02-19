import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  //Local
  //skilURL = 'http://localhost:8080/habilidades/';

  //Render
  skilURL='https://backendwaldi.onrender.com/habilidades/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skilURL + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skilURL + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skilURL + 'create',skills);
  }

  public update(id:number,skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.skilURL + `update/${id}`, skills);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.skilURL + `delete/${id}`);
  }
}