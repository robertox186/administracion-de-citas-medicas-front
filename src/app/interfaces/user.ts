export interface User {

    name:String,
    lastname:String,
    id_usuario:number,
    especialidad:String,
    admin:boolean,
    email:String,
    clave?:String,
    id_area:number,
    name_area?:String,
    ubicacion?:String,
    pais?:String,
    ciudad?:String
}
