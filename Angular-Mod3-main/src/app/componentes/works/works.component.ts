import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ComunicarService } from 'src/app/servicios/comunicar.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  showPencilWorks: boolean = true;
  miWorks:any;
  constructor(private datosPorfolio:PortfolioService, public comunicarComponentes:ComunicarService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miWorks=data.proyectos;
    })
    console.log('Estamos parados en la Works',this.comunicarComponentes.mostrarLapiz);
    if(this.comunicarComponentes.mostrarLapiz===true){
      this.showPencilWorks=true;
    }
  }
  
}
