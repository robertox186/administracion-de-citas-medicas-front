import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http:HttpClient) { }
  register(data:any){

    let options ={
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }}
  
    return  this.http.post("http://localhost:3000/register",data,options)
  
    }
    SelectMedico(data:any){

      let options ={
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }}
    
      return  this.http.post("http://localhost:3000/selectmedico",data,options)
    
      }
      SelectAllAreas(data:any){

        let options ={
          'mode': 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
          }}
      
        return  this.http.post("http://localhost:3000/selectarea",data,options)
      
        }
        createCola(data:any){

          let options ={
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }}
        
          return  this.http.post("http://localhost:3000/createcola",data,options)
        
          }
          selectAllCitas(data:any){

            let options ={
              'mode': 'cors',
              'headers': {
                  'Access-Control-Allow-Origin': '*',
              }}
          
            return  this.http.post("http://localhost:3000/selectcitapaciente",data,options)
          
            }
            cancelarCita(data:any){

              let options ={
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }}
            
              return  this.http.post("http://localhost:3000/cancelarcitapaciente",data,options)
            
              }
              updatePerfil(data:any){

                let options ={
                  'mode': 'cors',
                  'headers': {
                      'Access-Control-Allow-Origin': '*',
                  }}
              
                return  this.http.post("http://localhost:3000/updateperfilpaciente",data,options)
              
                }
}
