import { User } from "./user";

export interface Cita {
    id_cita:number,
    descripcion:String,
    titulo:String,
    hora_fin?:Date,
    hora_salida?:Date,
    hora_inicio?:Date,
    hora_llegada?:Date,
    motivo_anulacion?:String
   fecha:String,
   estado_cita:String,
 
   id_paciente:number,
   name:String,
   lastname:String,
    clave?:String,
    fecha_nac:String,
    nacionalidad:String,
    email:String,
    cedula:String,
    telefono:String,
    id_usuario:number,
    especialidad?:String,
     admin?:boolean,
     id_area?:number,
     name_Area?:String,
     


}
