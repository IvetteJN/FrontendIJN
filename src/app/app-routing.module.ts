import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditprojectComponent } from './components/proyecto/editproject.component';
import { NewprojectComponent } from './components/proyecto/newproject.component';
import { EditprofileComponent } from './components/acerca-de/editprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editproject/:id', component: EditprojectComponent},
  { path: 'newproject', component: NewprojectComponent},
  { path: 'editprofile/:id', component: EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
