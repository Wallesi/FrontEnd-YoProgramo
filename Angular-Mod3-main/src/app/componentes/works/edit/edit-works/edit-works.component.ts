import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Works } from 'src/app/model/works';
import { WorksService } from 'src/app/servicios/works.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-works',
  templateUrl: './edit-works.component.html',
  styleUrls: ['./edit-works.component.css']
})
export class EditWorksComponent implements OnInit {
  works:Works = null;
  isLogged=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sWorks:WorksService,
    private router:Router,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    const id=this.activatedRoute.snapshot.params['id'];
    this.sWorks.detail(id).subscribe(data=>{
      this.works = data;
    },err=>{
      alert("Error al modificar proyecto");
      this.router.navigate(['profile']);
    });
  }

  onUpdate(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sWorks.update(id,this.works).subscribe(
      data=>{
        this.router.navigate(['profile']);
      },err=>{
        alert("Error al modificar Skills");
        this.router.navigate(['profile']);
      }
    )
  }
 

}
