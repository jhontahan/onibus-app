import ApiService from "./api";

class BairroService extends ApiService{
    constructor(){
        super("/bairro")
    }

    salvar(bairro){
        return this.post("/save", bairro) 
    }

}

export default BairroService