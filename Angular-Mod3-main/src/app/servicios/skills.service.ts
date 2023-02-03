import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  eduURL='http://localhost:8080/habilidades/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.eduURL + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.eduURL + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create',skills);
  }

  public update(id:number,skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, skills);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}