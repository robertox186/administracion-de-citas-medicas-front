import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import {PacienteService} from '../../../services/paciente.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-citas-paciente',
  templateUrl: './citas-paciente.component.html',
  styleUrls: ['./citas-paciente.component.css']
})
export class CitasPacienteComponent implements OnInit {
citas:Cita[]=[]
index:number=-1;
  constructor( private modal:NgbModal,private http:PacienteService,private router:Router) { }
  close(){
    this.modal.dismissAll();
  }
  cancelarCita(){
    let token:any=localStorage.getItem('token')
    let user:any =localStorage.getItem('user');
    user=JSON.parse(user);

this.http.cancelarCita({...this.citas[this.index],token:token}).subscribe(res=>{

let resp:any=res;


  if(resp.status == 200){

alert('cita cancelada')
this.citas.splice(this.index,1);

  }else if(resp.status ==401){
    alert("no ha iniciado sesion")
    this.router.navigate(['/'])
    }
      
})
  }
  cerrarsesion(){

    localStorage.clear();
  }
  cancelar(bcita:Cita,bmodal:any,i:number){
    this.index=i;
this.modal.open(bmodal)

  }
  ngOnInit(): void {
    let token:any=localStorage.getItem('token')
    let user:any =localStorage.getItem('user');
    user=JSON.parse(user);

    this.http.selectAllCitas({token:token,...user}).subscribe(res=>{

let resp:any=res;


if(resp.status ==200){

  this.citas=resp.body.reverse();
}else if(resp.status ==401){
alert("no ha iniciado sesion")
this.router.navigate(['/'])
}
    })
  }

}

