import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/model/skills';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  name:string = '';
  progreso:string = '';
  isLogged=false;

  constructor(private sSkills:SkillsService,
              private router:Router,
              private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onCreate():void{
    const skills=new Skills(this.name,this.progreso);
    this.sSkills.save(skills).subscribe(data=>{
      alert("Skills añadida");
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
