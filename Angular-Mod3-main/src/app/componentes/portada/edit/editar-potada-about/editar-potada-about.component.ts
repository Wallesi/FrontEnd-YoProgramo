import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-potada-about',
  templateUrl: './editar-potada-about.component.html',
  styleUrls: ['./editar-potada-about.component.css']
})
export class EditarPotadaAboutComponent implements OnInit {
  persona:persona=null;

  constructor(
    private sPersona:PersonaService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data=>{
      this.persona=data;
    },err=>{
      alert("Error al modificar");
      this.router.navigate(['profile']);
    })
  }
  
  onUpdate():void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.sPersona.update(id,this.persona).subscribe(data=>{
      this.router.navigate(['profile']);
    },err=>{
      alert("Error");
      this.router.navigate(['profile']);
    })
  }
  uploadImage(){
    
  }


}
