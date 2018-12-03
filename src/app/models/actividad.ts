export class Actividad{
    constructor(
        public grupoID:number,
        public actividad:{
            descripcion:string,
            fechaHora:string
        }
    ){}
}