import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skills: Skills=null;
  isLogged=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sSkills: SkillsService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    const id=this.activatedRoute.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(data=>{
      this.skills = data;
    },err=>{
      alert("Error al modificar skills");
      this.router.navigate(['profile']);
    });
  }

  onUpdate(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sSkills.update(id,this.skills).subscribe(
      data=>{
        this.router.navigate(['profile']);
      },err=>{
        alert("Error al modificar Skills");
        this.router.navigate(['profile']);
      }
    )

  }
  uploadImage(){
    
  }
}
