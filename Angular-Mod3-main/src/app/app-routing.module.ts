import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { VistaLogeadoComponent } from './componentes/vista-logeado/vista-logeado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NewEducacionComponent } from './componentes/education/new/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/education/edit/edit-educacion/edit-educacion.component';
import { NewexperienciaComponent } from './componentes/experiencialab/new/newexperiencia/newexperiencia.component';
import { EditExperiencialabComponent } from './componentes/experiencialab/edit/edit-experiencialab/edit-experiencialab.component';
import { EditarPotadaAboutComponent } from './componentes/portada/edit/editar-potada-about/editar-potada-about.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: PrincipalComponent},
  {path: 'profile',component:VistaLogeadoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'editedu/:id',component:EditEducacionComponent},
  {path: 'nuevaexpe', component:NewexperienciaComponent},
  {path: 'editexpe/:id',component:EditExperiencialabComponent},
  {path: 'editarperfil/:id',component:EditarPotadaAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
