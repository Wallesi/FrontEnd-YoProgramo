import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//Local
//authURL = 'http://localhost:8080/auth/';

//Render
authURL='https://backendwaldi.onrender.com/auth/';

  constructor(private httpCLient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.httpCLient.post<any>(this.authURL+'nuevo',nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpCLient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }
}
