import { Component, OnInit } from '@angular/core';
import {Area} from '../../../interfaces/area';
import  {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AreaService} from '../../../services/area.service';
import {UserService} from '../../../services/user.service'
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
areas:Area[]=[];
area:Area={id_area:-1,name_area:"",ubicacion:"",pais:"",ciudad:""};
index:number=-1;
  constructor(private modal:NgbModal,private areaservice:AreaService,private http:UserService) { }

  crearArea(){

   this.areaservice.CrearArea({...this.area,token:localStorage.getItem('token')}).subscribe(res=>{
     let resp:any=res;
     console.log(resp)
     if(resp.status==200){
       this.areas.push(resp.body);
       
       this.area ={id_area:-1,name_area:"",ubicacion:"",pais:"",ciudad:""};
this.modal.dismissAll()
     }
   })

  }
  actualizarArea(){

    this.areaservice.updateArea({...this.area,token:localStorage.getItem('token')}).subscribe(res=>{
      let resp:any=res;
      console.log(resp)
      if(resp.status==200){
        this.areas[this.index]=this.area;
       this.area ={id_area:-1,name_area:"",ubicacion:"",pais:"",ciudad:""};
 this.modal.dismissAll()
      }
    })
 
   }
   deleteArea(){

    this.areaservice.deletearea({...this.area,token:localStorage.getItem('token')}).subscribe(res=>{
      let resp:any=res;
      console.log(resp)
      if(resp.status==200){
        this.areas.splice(this.index,1);
 this.modal.dismissAll()
      }
    })
 
   }
  close(){
    this.modal.dismissAll();
  }
  newArea(usuario:any){
this.modal.open(usuario);
    
  }
  editar(lugar:Area,bmodal:any,i:number){
    this.index=i;
             this.modal.open(bmodal);
             this.area=lugar;
  }
  ngOnInit(): void {
    console.log(this.http.getToken())
    this.areaservice.getAllAreas({token:localStorage.getItem('token')}).subscribe(res=>{

      let resp:any=res;

      if(resp.status==200){

        this.areas=resp.body;
      }
    })
  }

}
