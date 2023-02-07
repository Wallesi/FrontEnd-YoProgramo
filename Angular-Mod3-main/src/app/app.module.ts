import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { WorksComponent } from './componentes/works/works.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaLogeadoComponent } from './componentes/vista-logeado/vista-logeado.component';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { NewEducacionComponent } from './componentes/education/new/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/education/edit/edit-educacion/edit-educacion.component';
import { ExperiencialabComponent } from './componentes/experiencialab/experiencialab.component';
import { NewexperienciaComponent } from './componentes/experiencialab/new/newexperiencia/newexperiencia.component';
import { EditExperiencialabComponent } from './componentes/experiencialab/edit/edit-experiencialab/edit-experiencialab.component';
import { EditarPotadaAboutComponent } from './componentes/portada/edit/editar-potada-about/editar-potada-about.component';
import { EditSkillsComponent } from './componentes/skills/edit/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new/new-skills/new-skills.component';
import { NewWorksComponent } from './componentes/works/new/new-works/new-works.component';
import { EditWorksComponent } from './componentes/works/edit/edit-works/edit-works.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortadaComponent,
    AboutUsComponent,
    EducationComponent,
    SkillsComponent,
    WorksComponent,
    FooterComponent,
    LoginComponent,
    VistaLogeadoComponent,
    PrincipalComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    ExperiencialabComponent,
    NewexperienciaComponent,
    EditExperiencialabComponent,
    EditarPotadaAboutComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    NewWorksComponent,
    EditWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
