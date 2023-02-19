import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-potada-about',
  templateUrl: './editar-potada-about.component.html',
  styleUrls: ['./editar-potada-about.component.css']
})
export class EditarPotadaAboutComponent implements OnInit {
  persona:persona=null;
  isLogged=false;

  constructor(
    private sPersona:PersonaService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    public imageService: ImageService,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

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
    this.persona.img=this.imageService.url;
    this.sPersona.update(id,this.persona).subscribe(data=>{
      this.router.navigate(['profile']);
    },err=>{
      alert("Error");
      this.router.navigate(['profile']);
    })
  }

  //Imagen perfil revisar

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  } 


}
