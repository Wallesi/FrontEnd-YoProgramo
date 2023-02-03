import { Component, OnInit } from '@angular/core';
import { Works } from 'src/app/model/works';
import { WorksService } from 'src/app/servicios/works.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-works',
  templateUrl: './new-works.component.html',
  styleUrls: ['./new-works.component.css']
})
export class NewWorksComponent implements OnInit {
  img:string='';
  titulo:string='';
  descripcion:string='';
  web:string='';
  git:string='';

  constructor(private sWorks:WorksService,private router:Router) { }

  ngOnInit(): void {
   
  }

  onCreate():void{
    const works=new Works(this.img,this.titulo,this.descripcion,this.web,this.git);
    this.sWorks.save(works).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['profile']);
    },err=>{
      alert("Fallo")
    this.router.navigate(['profile']);
    }
    );
  }

  uploadImage(){
    
  }
}
