import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DeashboardComponent} from './pages/admin/deashboard/deashboard.component';
import {AreaComponent} from './pages/admin/area/area.component';
import {MedicoDeashboardComponent} from './pages/medico/medico-deashboard/medico-deashboard.component';
import {RegisterComponent} from './pages/register/register.component'
import {PacienteDeashboardComponent} from './pages/paciente/paciente-deashboard/paciente-deashboard.component'
import {PerfilPacienteComponent} from './pages/paciente/perfil-paciente/perfil-paciente.component'
import {CitasPacienteComponent} from './pages/paciente/citas-paciente/citas-paciente.component'
import {MedicoperfilComponent} from './pages/medico/medicoperfil/medicoperfil.component'
import {MedicocolaComponent} from './pages/medico/medicocola/medicocola.component'
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"admin",children:[{path:'deashboard',component:DeashboardComponent},{path:'area',component:AreaComponent}]},
  {path:'medico',children:[{path:'deashboard',component:MedicoDeashboardComponent},{path:'perfil',component:MedicoperfilComponent},{path:'cola',component:MedicocolaComponent}]},
  {path:"register",component:RegisterComponent},
  {path:"paciente",children:[{path:'deashboard',component:PacienteDeashboardComponent},{path:'perfil',component:PerfilPacienteComponent},{path:'citas',component:CitasPacienteComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
