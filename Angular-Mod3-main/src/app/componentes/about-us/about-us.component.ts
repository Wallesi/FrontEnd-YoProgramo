import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  persona:persona=null;
  constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
    }
    cargarPersona(){
      this.sPersona.detail(1).subscribe(data=>{
        (this.persona=data)
      })
    }
   
}
