import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import {PacienteService} from '../../../services/paciente.service'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-paciente-deashboard',
  templateUrl: './paciente-deashboard.component.html',
  styleUrls: ['./paciente-deashboard.component.css']
})
export class PacienteDeashboardComponent implements OnInit {
medicos:User[]=[];
data:User[]=[];
user:User={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
areas:any[]=[];  
inicio:boolean=false;
    filtro:any=-1
  constructor(private http:PacienteService,private modal:NgbModal) { }
Solicitar(bmedico:User,bmodal:any,i:number){

  this.user=bmedico;
this.modal.open(bmodal);

}
close(){
  this.modal.dismissAll();

}
cerrarsesion(){

  localStorage.clear();
}
solicitarCita(){
let myuser:any=localStorage.getItem('user');
myuser=JSON.parse(myuser);
let token:any=localStorage.getItem('token');

let fecha_cre=new Date().toLocaleString()
fecha_cre=fecha_cre.slice(0,10)
console.log(fecha_cre)
this.http.createCola({...this.user,...myuser,fecha_cre:fecha_cre,token:token}).subscribe(res=>{

  let resp:any=res;
  console.log(resp);

  if(resp.status==200){

    this.modal.dismissAll();
    alert("solicitud enviada com exito!")

  }
})


}
next(){
  this.inicio=!this.inicio
  this.medicos= this.data.filter(m=>m.id_area==this.filtro)
}
  ngOnInit(): void {
let token=localStorage.getItem('token');
this.http.SelectMedico({token:token}).subscribe(res=>{

  let resp:any=res;
  console.log(resp)
   if(resp.status==200){

     this.medicos=resp.body;
     this.data=resp.body;
    


   }


})
this.http.SelectAllAreas({token:token}).subscribe(res=>{

  let resp:any=res;
console.log(resp)
   if(resp.status==200){

     this.areas=resp.body;
  
    


   }


})
  }

}
