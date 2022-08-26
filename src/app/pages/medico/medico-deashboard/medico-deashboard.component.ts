import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Cita} from '../../../interfaces/cita';
import {Paciente} from '../../../interfaces/paciente';
import {UserService} from '../../../services/user.service';
import {MedicoService} from '../../../services/medico.service'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
@Component({
  selector: 'app-medico-deashboard',
  templateUrl: './medico-deashboard.component.html',
  styleUrls: ['./medico-deashboard.component.css']
})
export class MedicoDeashboardComponent implements OnInit {
  citas1:Cita[]=[];
  data:Cita[]=[];
cancel:boolean=false;
  filtro:String="todos";
citas:Cita[]=[];
prueba:any;
pdf:any;
pdf1:any;
index:number=-1;
cita:Cita={titulo:"",descripcion:"",hora_fin:new Date(),hora_inicio:new Date(),hora_llegada:new Date(),hora_salida:new Date(),fecha_nac:"",fecha:"",name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,nacionalidad:"",estado_cita:"en espera",id_cita:-1,motivo_anulacion:"",id_usuario:-1}
pacientes:Paciente[]=[]; 
paciente:Paciente={name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,fecha_nac:"",nacionalidad:""};
  constructor(private modal:NgbModal,private http:UserService,private medicoService:MedicoService) { }
  cerrarsesion(){

    localStorage.clear();
  }
 downloadPDF(){
 this.pdf=!this.pdf;
}
 
 cancelar(){
this.cancel=!this.cancel;

 }
 onChange(event:any){
   console.log(event)
   console.log(this.data)
   console.log(this.citas)
if(this.filtro=="todos"){
  this.citas=this.data;

}else{

  this.citas=this.data.filter(d=>d.estado_cita==this.filtro);
}
 }
 
  nuevaCita(template:any){


    this.modal.open(template);

  }
  editar(bcita:Cita,bmodal:any,i:number){

    this.index=i;
        this.citas1=this.citas.filter(c=>(c.cedula==bcita.cedula && c.id_cita <bcita.id_cita));
    this.cita=bcita;
    console.log(this.citas1)
    this.modal.open(bmodal);
  }
  agregarCita(){
 let user:any="";
    user=localStorage.getItem('user');
    user=JSON.parse(user);
    this.cita.id_usuario=user.id_usuario;
    this.medicoService.crearCita({...this.cita,token:localStorage.getItem('token')}).subscribe(res=>{
      
      let resp:any=res;
    
    
    console.log(res)
    if(resp.status==200){

 this.cita.id_paciente=resp.body.id_paciente;
 this.cita.id_cita=resp.body.id_cita;
 this.data.unshift(this.cita); 
      this.citas.unshift(this.cita);
     this.cita= {titulo:"",descripcion:"",hora_fin:new Date(),hora_inicio:new Date(),hora_llegada:new Date(),hora_salida:new Date(),fecha_nac:"",fecha:"",name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,nacionalidad:"",estado_cita:"en espera",id_cita:-1,motivo_anulacion:"",id_usuario:-1}
      this.modal.dismissAll()
    } 
    })
  }

  update(){


    let token:any=localStorage.getItem('token');


    this.medicoService.updateCita({...this.cita,token:token}).subscribe(res=>{

      let resp:any=res;
      console.log(resp)
      if(resp.status==200){
console.log(this.cita)
        this.citas[this.index]=this.cita;
        this.cita= {titulo:"",descripcion:"",hora_fin:new Date(),hora_inicio:new Date(),hora_llegada:new Date(),hora_salida:new Date(),fecha_nac:"",fecha:"",name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,nacionalidad:"",estado_cita:"en espera",id_cita:-1,motivo_anulacion:"",id_usuario:-1}
         
        this.modal.dismissAll()
      }
    })
  }

  cancelarCita(){


    let token:any=localStorage.getItem('token');

   
    this.medicoService.cancelarCita({...this.cita,token:token}).subscribe(res=>{

      let resp:any=res;
      console.log(resp)
      if(resp.status==200){
console.log(this.cita)
        this.citas[this.index]=this.cita;
        this.cita= {titulo:"",descripcion:"",hora_fin:new Date(),hora_inicio:new Date(),hora_llegada:new Date(),hora_salida:new Date(),fecha_nac:"",fecha:"",name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,nacionalidad:"",estado_cita:"en espera",id_cita:-1,motivo_anulacion:"",id_usuario:-1}
         this.cancelar()
        this.modal.dismissAll()
      }
    })
  }
  delete(){

    let token:any=localStorage.getItem('token');


    this.medicoService.deleteCita({...this.cita,token:token}).subscribe(res=>{

      let resp:any=res;
      console.log(resp)
      if(resp.status==200){

        this.citas.splice(this.index,1);
        this.modal.dismissAll()
      }
    })

  }
  openPdf(pdf:any){
this.modal.open(pdf)

  }
close(){

  this.modal.dismissAll();
}
  ngOnInit(): void {


    let user:any=localStorage.getItem('user');

    user=JSON.parse(user);

    let token=localStorage.getItem('token');

    this.medicoService.selectAllCitas({id_usuario:user.id_usuario,token:token}).subscribe(res=>{

      let resp:any=res;

      console.log(resp)
      if(resp.status==200){
let i:number=0
this.citas=resp.body.reverse();
this.data=resp.body.reverse();
console.log(this.citas)
console.log(this.data)
    for(i;i<resp.body.length;i++){
           this.citas[i].fecha= this.citas[i].fecha.substring(0,10);
           this.citas[i].fecha_nac= this.citas[i].fecha_nac.substring(0,10);
    }
        
      }
    })
  }

}
