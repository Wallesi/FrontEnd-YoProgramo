import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  img:string = '';
  name:string = '';
  progreso:string = '';

  constructor(private sSkills:SkillsService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skills=new Skills(this.img,this.name,this.progreso);
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
