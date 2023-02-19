import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  institucionE:string = '';
  tituloE:string = '';
  inicioE:string = '';
  finalE:string = '';

  isLogged=false;


  constructor(private sEducacion:EducacionService,private router:Router,private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onCreate():void{
    const edu=new Educacion(this.institucionE,this.tituloE,this.inicioE,this.finalE);
    this.sEducacion.save(edu).subscribe(data=>{
      alert("Educacion añadida");
      this.router.navigate(['profile']);
    },err=>{
      alert("Fallo")
    this.router.navigate(['profile']);
    }
    );
  }
}
