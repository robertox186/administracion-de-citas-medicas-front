import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit {
perfil:Paciente={name:"",lastname:"",fecha_nac:"",id_paciente:-1,email:"",telefono:"",nacionalidad:"",cedula:"",clave:""}
  constructor(private http:PacienteService) { }
actualizar(){
let token=localStorage.getItem('token');


this.http.updatePerfil({...this.perfil,token:token}).subscribe(res=>{

  let resp:any=res;
  console.log(resp)
  if(resp.status==200){

    alert('perfil actualizado!')
  }
})
}
  ngOnInit(): void {
    let user:any=localStorage.getItem('user');
     user=JSON.parse(user);
     this.perfil=user;
 
 
  }
cerrarsesion(){

  localStorage.clear();
}
}
