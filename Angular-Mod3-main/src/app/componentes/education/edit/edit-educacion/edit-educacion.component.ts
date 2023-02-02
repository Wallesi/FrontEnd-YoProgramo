import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu:Educacion = null;

  constructor(
    private sEducacion:EducacionService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data=>{
      this.edu = data;
    },err=>{
      alert("Error al modificar educacion");
      this.router.navigate(['profile']);
    });
  }

  onUpdate(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id,this.edu).subscribe(
      data=>{
        this.router.navigate(['profile']);
      },err=>{
        alert("Error al modificar educacion");
        this.router.navigate(['profile']);
      }
    )

  }
}
