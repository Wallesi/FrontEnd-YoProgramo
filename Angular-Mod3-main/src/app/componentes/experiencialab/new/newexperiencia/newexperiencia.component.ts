import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencialab } from 'src/app/model/experiencialab';
import { ExperiencialabService } from 'src/app/servicios/experiencialab';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {
  puesto:string = '';
  empresa:string = '';
  comienzo:string = '';
  finalizo:string = '';
  tareas:string = '';

  isLogged=false;

  constructor(private sExperiencialab:ExperiencialabService,
    private router:Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onCreate():void{
    const expe=new Experiencialab(this.puesto,this.empresa,this.comienzo,this.finalizo,this.tareas);
    this.sExperiencialab.save(expe).subscribe(data=>{
      alert("Educacion añadida");
      this.router.navigate(['profile']);
    },err=>{
      alert("Fallo")
    this.router.navigate(['profile']);
    }
    );
  }

}

