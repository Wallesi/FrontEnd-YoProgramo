import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencialab } from 'src/app/model/experiencialab';
import { ExperiencialabService } from 'src/app/servicios/experiencialab';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-experiencialab',
  templateUrl: './edit-experiencialab.component.html',
  styleUrls: ['./edit-experiencialab.component.css']
})
export class EditExperiencialabComponent implements OnInit {
  expe:Experiencialab=null;
  isLogged=false;

  constructor(
    private sExperiencialab:ExperiencialabService,
    private activatedRoute: ActivatedRoute,
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
    this.sExperiencialab.detail(id).subscribe(data=>{
      this.expe = data;
    },err=>{
      alert("Error al modificar experiencia");
      this.router.navigate(['profile']);
    });
  }

     onUpdate(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sExperiencialab.update(id,this.expe).subscribe(
      data=>{
        this.router.navigate(['profile']);
      },err=>{
        alert("Error al modificar experiencia");
        this.router.navigate(['profile']);
      }
    )

  }
}
