import ApiService from "./api";

class OnibusService extends ApiService{
    constructor(){
        super("/itinerario")
    }

    buscar(filtro){
        let url = `/findBy`;

        return this.getParametros(url, {params: {
            linhaOnibus: filtro.linhaOnibus,
            sentido: filtro.sentido
        }});
    }

    buscarOnibus(){
        let url = `/findAllBus`;
        return this.get(url);
    }   

}

export default OnibusService