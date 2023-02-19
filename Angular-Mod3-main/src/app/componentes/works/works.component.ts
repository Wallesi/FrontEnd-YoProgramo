import { Component, OnInit } from '@angular/core';
import { Works } from 'src/app/model/works';
import { WorksService } from 'src/app/servicios/works.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works:Works[]=[];
  isLogged=false; 

  constructor(private sWorks:WorksService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarWorks();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }
  
  cargarWorks():void{
    this.sWorks.lista().subscribe(data=>{this.works=data})
  }
  delete(id:number){
    if(id != undefined){
      
      this.sWorks.delete(id).subscribe(
        data => {
          this.cargarWorks();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
