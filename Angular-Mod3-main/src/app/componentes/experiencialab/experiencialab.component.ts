import { Component, OnInit } from '@angular/core';
import { Experiencialab } from 'src/app/model/experiencialab';
import { ExperiencialabService } from 'src/app/servicios/experiencialab';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencialab',
  templateUrl: './experiencialab.component.html',
  styleUrls: ['./experiencialab.component.css']
})
export class ExperiencialabComponent implements OnInit {
  expe:Experiencialab[]=[];
  constructor(private sExperiencialab:ExperiencialabService, private tokenService:TokenService) { }

  isLogged=false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencialab.lista().subscribe(data => { this.expe = data; })
    
  }

  delete(id:number){
    if(id != undefined){
      this.sExperiencialab.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
