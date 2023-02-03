import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skills[]=[];
  isLogged=false;

  constructor(private sSkills:SkillsService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    
  }
  cargarSkills():void{
    this.sSkills.lista().subscribe(data=>{this.skills=data})
  }
  delete(id:number){
    if(id != undefined){
      this.sSkills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
