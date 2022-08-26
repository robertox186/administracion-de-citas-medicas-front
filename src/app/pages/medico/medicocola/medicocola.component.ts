import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medicocola',
  templateUrl: './medicocola.component.html',
  styleUrls: ['./medicocola.component.css']
})
export class MedicocolaComponent implements OnInit {
colas:any[]=[];
index:number=-1
cola:any={titulo:"",descripcion:"",estado:"",hora_fin:new Date(),hora_inicio:new Date(),hora_llegada:new Date(),hora_salida:new Date(),fecha_nac:"",fecha:"",name:"",lastname:"",email:"",cedula:"",telefono:"",id_paciente:-1,nacionalidad:"",estado_cita:"en espera",id_cita:-1,motivo_anulacion:"",id_usuario:-1}


  constructor(private http:MedicoService,private modal:NgbModal) { }
  cerrarsesion(){

    localStorage.clear();
  }
  editar(bcola:any,bmodal:any,i:number){

    this.index=i;
    this.modal.open(bmodal);
    this.cola=bcola;
  }
  close(){

    this.modal.dismissAll();
  }
  agregarCita(){
    let user:any="";
       user=localStorage.getItem('user');
       user=JSON.parse(user);
       this.cola.id_usuario=user.id_usuario;
       this.http.crearCita({...this.cola,token:localStorage.getItem('token'),estado_cita:"en espera"}).subscribe(res=>{
         
         let resp:any=res;
       
       let token=localStorage.getItem('token')
       console.log(res)
       if(resp.status==200){
         this.cola.estado='aceptada'
   this.http.updateCola({...this.cola,token:token}).subscribe(res2=>{



    let resp2=res2;
    console.log(resp2)

    this.colas.splice(this.index,1)
    this.modal.dismissAll()
   })

       
       } 
       })
     }
  ngOnInit(): void {

let token=localStorage.getItem('token');
let user:any=localStorage.getItem('user');
user=JSON.parse(user);
    this.http.selectCola({token:token,...user}).subscribe(res=>{

      let resp:any=res;
console.log(resp);

if(resp.status==200){

  this.colas=resp.body;
}


    })
  }

}
