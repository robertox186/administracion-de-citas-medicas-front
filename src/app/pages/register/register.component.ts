import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../../services/paciente.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String=""
lastname:String="";
email:String="";
fecha_nac:String="";
clave:String="";
clave2:String="";
cedula:String=""
telefono:String="";
nacionalidad:String="";
  constructor(private http:PacienteService,private router:Router) { }
  async  register(){
    console.log(this.email,this.clave)
 if(this.clave == this.clave2){
  await this.http.register({email:this.email,cedula:this.cedula,clave:this.clave,name:this.name,lastname:this.lastname,fecha_nac:this.fecha_nac,telefono:this.telefono,nacionalidad:this.nacionalidad,}).subscribe((res)=>{
 let resp:any=res;
 console.log(resp.auth)
 
 if(resp.auth){
 
  
  localStorage.setItem('token',resp.token);
  localStorage.setItem('user',JSON.stringify(resp.body));
  
  
 
    this.router.navigate(['/paciente/deashboard']);
  
 }else{
   alert('error creando el usuario');
 }
  })
   
 }else{

  alert('las contraseñas no coinciden')
 }
  }
  ngOnInit(): void {
  }

}
