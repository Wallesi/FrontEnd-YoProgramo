import { Token } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  persona:persona=null; //

  constructor(private sPersona:PersonaService,private tokenService:TokenService) { }
  
  
  isLogged=false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    }
    
    cargarPersona(){
      this.sPersona.detail(1).subscribe(data=>{
        (this.persona=data)
      })
    }
}
