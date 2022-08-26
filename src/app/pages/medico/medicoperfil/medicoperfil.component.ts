import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AreaService } from 'src/app/services/area.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medicoperfil',
  templateUrl: './medicoperfil.component.html',
  styleUrls: ['./medicoperfil.component.css']
})
export class MedicoperfilComponent implements OnInit {
  user:User={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
  areas:any[]=[]
  constructor(private areaservice:AreaService,private http:MedicoService) { }
  cerrarsesion(){

    localStorage.clear();
  }
  actualizar(){
    let token=localStorage.getItem('token');
console.log(this.user)
    this.http.updatePerfil({...this.user,token:token}).subscribe(res=>{

let resp:any=res;
console.log(resp)
if(resp.status==200){
alert("perfil actualizado con exito")

}

    })
  }
  ngOnInit(): void {
    let user:any = localStorage.getItem('user');
    user=JSON.parse(user);
    this.user=user;

    this.areaservice.getAllAreas({token:localStorage.getItem('token')}).subscribe(res=>{

      let resp:any=res;

console.log(resp)
      this.areas=resp.body;
     })
         
  }

}
