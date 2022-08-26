import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPipe } from './pages/login.pipe';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {UserService} from './services/user.service';
import {AreaService} from './services/area.service'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DeashboardComponent } from './pages/admin/deashboard/deashboard.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { AreaComponent } from './pages/admin/area/area.component';
import { MedicoDeashboardComponent } from './pages/medico/medico-deashboard/medico-deashboard.component';
import { MedicoPacienteComponent } from './pages/medico/medico-paciente/medico-paciente.component'
import {NgxPrintModule} from 'ngx-print';
import { RegisterComponent } from './pages/register/register.component';
import { PacienteDeashboardComponent } from './pages/paciente/paciente-deashboard/paciente-deashboard.component'
import {PacienteService} from './services/paciente.service';
import { CitasPacienteComponent } from './pages/paciente/citas-paciente/citas-paciente.component';
import { PerfilPacienteComponent } from './pages/paciente/perfil-paciente/perfil-paciente.component';
import { MedicoperfilComponent } from './pages/medico/medicoperfil/medicoperfil.component';
import { MedicocolaComponent } from './pages/medico/medicocola/medicocola.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPipe,
    LoginComponent,
    DeashboardComponent,
    AreaComponent,
    MedicoDeashboardComponent,
    MedicoPacienteComponent,
    RegisterComponent,
    PacienteDeashboardComponent,
    CitasPacienteComponent,
    PerfilPacienteComponent,
    MedicoperfilComponent,
    MedicocolaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
      
      NgbModalModule,
      NgxPrintModule
  ],
  providers: [UserService,AreaService,PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
