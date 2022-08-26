import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router'
@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:String="";
password:String="";
  constructor(private http:UserService,private router:Router) { }
async  login(){
   console.log(this.email,this.password)

 await this.http.login({email:this.email,clave:this.password}).subscribe((res)=>{
let resp:any=res;
console.log(resp.auth)

if(resp.auth){


 localStorage.setItem('token',resp.token);
 localStorage.setItem('user',JSON.stringify(resp.body));

if(resp.user=='user'){
 if(resp.body.admin){
   this.router.navigate(['/admin/deashboard']);
 }else{

   this.router.navigate(['/medico/deashboard']); 
 }

}else{
 
  this.router.navigate(['/paciente/deashboard']); 
}
}

 })
  

 }

  ngOnInit(): void {
  }

}
