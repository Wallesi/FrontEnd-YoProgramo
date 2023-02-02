import { Component, OnInit } from '@angular/core';
import { ComunicarService } from 'src/app/servicios/comunicar.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  showPencilSkils!:boolean;

  constructor(public comunicarComponentes:ComunicarService) { }

  ngOnInit(): void {
    
    console.log('Estamos parados en la skills',this.comunicarComponentes.mostrarLapiz);
    
    if(this.comunicarComponentes.mostrarLapiz===true){
      this.showPencilSkils = true;
    }
  }

}
