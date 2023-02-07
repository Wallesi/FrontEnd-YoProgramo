import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Works } from 'src/app/model/works';
import { ImageService } from 'src/app/servicios/image.service';
import { WorksService } from 'src/app/servicios/works.service';

@Component({
  selector: 'app-edit-works',
  templateUrl: './edit-works.component.html',
  styleUrls: ['./edit-works.component.css']
})
export class EditWorksComponent implements OnInit {
  works:Works = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sWorks:WorksService,
    private router:Router,
    public imageService:ImageService
  ) { }

  ngOnInit(): void {
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
    this.works.img=this.imageService.url;
    this.sWorks.update(id,this.works).subscribe(
      data=>{
        this.router.navigate(['profile']);
      },err=>{
        alert("Error al modificar Skills");
        this.router.navigate(['profile']);
      }
    )
  }
  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "works_" + id;
    this.imageService.uploadImage($event, name);
  } 

}
