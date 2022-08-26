import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http:HttpClient) { }
  
  crearCita(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/createcita",data,options)
  
    }

     
  selectAllCitas(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/selectcita",data,options)
  
    }
    updateCita(data:any){

      let options ={
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }}
    
      return  this.http.post("http://localhost:3000/updatecita",data,options)
    
      }
      
      cancelarCita(data:any){

      let options ={
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }}
    
      return  this.http.post("http://localhost:3000/cancelarcitamedico",data,options)
    
      }
      deleteCita(data:any){

        let options ={
          'mode': 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
          }}
      
        return  this.http.post("http://localhost:3000/deletecita",data,options)
      
        }
        updateCola(data:any){

          let options ={
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }}
        
          return  this.http.post("http://localhost:3000/updatecola",data,options)
        
}
selectCola(data:any){

  let options ={
    'mode': 'cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }}

  return  this.http.post("http://localhost:3000/selectcola",data,options)


}
updatePerfil(data:any){

  let options ={
    'mode': 'cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }}

  return  this.http.post("http://localhost:3000/updateperfilmedico",data,options)

  }




}