import { Component, OnInit } from '@angular/core';
import { Works } from 'src/app/model/works';
import { WorksService } from 'src/app/servicios/works.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-works',
  templateUrl: './new-works.component.html',
  styleUrls: ['./new-works.component.css']
})
export class NewWorksComponent implements OnInit {
  fechas:string='';
  titulo:string='';
  descripcion:string='';
  web:string='';
  git:string='';
  isLogged=true;

  constructor(private sWorks:WorksService,
              private router:Router,
              private tokenService:TokenService
              ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onCreate():void{
    const works=new Works(this.fechas,this.titulo,this.descripcion,this.web,this.git);
    this.sWorks.save(works).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['profile']);
    },err=>{
      alert("Fallo")
    this.router.navigate(['profile']);
    }
    );
  }

}
