import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {Area} from '../../../interfaces/area';
import  {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AreaService} from '../../../services/area.service'
import {UserService} from '../../../services/user.service'
@Component({
  selector: 'app-deashboard',
  templateUrl: './deashboard.component.html',
  styleUrls: ['./deashboard.component.css']
})
export class DeashboardComponent implements OnInit {
  areas:Area[]=[]
  users:User[]=[];
  clave:String="";
  clave2:String="";
  index:number=-1;
  user:User={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
  constructor(private modal:NgbModal,private areaservice:AreaService,private http:UserService) { }
newUser(user:any){

this.modal.open(user);

}

coinciden(){

  return this.clave==this.clave2;
}
close(){
  this.modal.dismissAll();
}
crearUsuario(){


  if(this.coinciden()){
this.user.clave=this.clave;
    this.http.createUser({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{

      let resp:any=res;
      console.log(resp)
       if(resp.status ==200){
          this.users.push(resp.body);
          this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
          this.modal.dismissAll();
       }


    })
  }
}
  editar(user:User,bmodal:any,i:number){
    this.index=i;
             this.modal.open(bmodal);
             this.user=user;
           }
           updateName(){
        this.http.UpdateName({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
          let resp:any=res;
          console.log(resp);
          if(resp.status==200){
 this.users[this.index]=this.user;
 this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
          this.modal.dismissAll();


          }
        })

           }
           updatelastName(){
            this.http.UpdateLastName({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
              let resp:any=res;
              console.log(resp);
              if(resp.status==200){
     this.users[this.index]=this.user;
              this.modal.dismissAll();
    this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
              }
            })
    
               }
               updateespecialidad(){
                this.http.UpdateEspecialidad({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
                  let resp:any=res;
                  console.log(resp);
                  if(resp.status==200){
         this.users[this.index]=this.user;
                  this.modal.dismissAll();
                  this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
        
                  }
                })
        
                   }
                   updateEmail(){
                    this.http.UpdateEmail({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
                      let resp:any=res;
                      console.log(resp);
                      if(resp.status==200){
             this.users[this.index]=this.user;
                      this.modal.dismissAll();
                      this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
            
                      }
                    })
            
                       }
                       updateClave(){
                         if(this.coinciden()){
                        this.http.Updateclave({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
                          let resp:any=res;
                          console.log(resp);
                          if(resp.status==200){
                 this.users[this.index]=this.user;
                          this.modal.dismissAll();
                          this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
                
                          }
                        })
                      }
                
                           }
                           updateArea(){
                            this.http.UpdateArea({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
                              let resp:any=res;
                              console.log(resp);
                              if(resp.status==200){
                     this.users[this.index]=this.user;
                              this.modal.dismissAll();
                    
                              this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
                              }
                            })
                    
                               }
                               deleteuser(){
            this.http.deleteUser({...this.user,token:localStorage.getItem('token')}).subscribe(res=>{
              let resp:any=res;
              console.log(resp);
              if(resp.status==200){
     this.users.splice(this.index,1);
              this.modal.dismissAll();
              this.user={name:'',lastname:'',clave:'',email:'',especialidad:'',admin:false,id_usuario:-1,id_area:-1,name_area:''};
    
    
              }
            })
    
               }
  ngOnInit(): void {
     this.areaservice.getAllAreas({token:localStorage.getItem('token')}).subscribe(res=>{

      let resp:any=res;

console.log(resp)
      this.areas=resp.body;
     })
         

     this.http.selectAllUsers({token:localStorage.getItem('token')}).subscribe(res=>{
      let resp:any=res;

      console.log(resp);
      this.users=resp.body;

     })
  }

}
