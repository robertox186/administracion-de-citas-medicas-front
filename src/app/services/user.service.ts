import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User={name:"",lastname:"",email:"",especialidad:"",id_area:0,id_usuario:0,admin:false,clave:""};
  token:any="";
  constructor(private http:HttpClient) { }
setToken(token:any){
  this.token=token;
}
getToken(){
  return this.token;
}
setUser(user:User){
this.user=user;

}
getUser(){
  return this.user;
}
 login(data:any){

  let options ={
    'mode': 'cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }}

  return  this.http.post("http://localhost:3000/login",data,options)

  }
  createUser(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/createuser",data,options)
  
    }
    selectAllUsers(data:any){

      let options ={
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }}
    
      return  this.http.post("http://localhost:3000/selectallusers",data,options)
    
      }

      UpdateName(data:any){

        let options ={
          'mode': 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
          }}
      
        return  this.http.post("http://localhost:3000/updatename",data,options)
      
        }
        UpdateLastName(data:any){

          let options ={
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }}
        
          return  this.http.post("http://localhost:3000/updatelastname",data,options)
        
          }
          UpdateEmail(data:any){

            let options ={
              'mode': 'cors',
              'headers': {
                  'Access-Control-Allow-Origin': '*',
              }}
          
            return  this.http.post("http://localhost:3000/updateemail",data,options)
          
            }

            Updateclave(data:any){

              let options ={
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }}
            
              return  this.http.post("http://localhost:3000/updateclave",data,options)
            
              }
              UpdateEspecialidad(data:any){

                let options ={
                  'mode': 'cors',
                  'headers': {
                      'Access-Control-Allow-Origin': '*',
                  }}
              
                return  this.http.post("http://localhost:3000/updateespecialidad",data,options)
              
                }
                UpdateArea(data:any){

                  let options ={
                    'mode': 'cors',
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                    }}
                
                  return  this.http.post("http://localhost:3000/updatearea",data,options)
                
                  }
                 deleteUser(data:any){

                    let options ={
                      'mode': 'cors',
                      'headers': {
                          'Access-Control-Allow-Origin': '*',
                      }}
                  
                    return  this.http.post("http://localhost:3000/deleteuser",data,options)
                  
                    }
}
