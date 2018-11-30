export class Usuario{
    constructor(
        public Nombre:string,
        public Password:string,
        public Email:string,          
        public NickName:string,
        public RememberMe:boolean
    ){}
}