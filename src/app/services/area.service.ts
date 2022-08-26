import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }

  CrearArea(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/createarea",data,options)
  
    }

  getAllAreas(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/selectarea",data,options)
  
    }
    updateArea(data:any){

      let options ={
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }}
    
      return  this.http.post("http://localhost:3000/updateareas",data,options)
    
      }
      deletearea(data:any){

        let options ={
          'mode': 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
          }}
      
        return  this.http.post("http://localhost:3000/deletearea",data,options)
      
        }
}


