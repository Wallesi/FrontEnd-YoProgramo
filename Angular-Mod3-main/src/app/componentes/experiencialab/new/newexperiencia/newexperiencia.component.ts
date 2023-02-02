import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencialab } from 'src/app/model/experiencialab';
import { ExperiencialabService } from 'src/app/servicios/experiencialab';
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

  constructor(private sExperiencialab:ExperiencialabService,private router:Router) { }

  ngOnInit(): void {
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

