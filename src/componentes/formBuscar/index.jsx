import React, { useEffect, useState } from "react";
import * as S from "./style"
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import OnibusService from "../../services/onibusService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function FormBuscar(){

    const service = new OnibusService();

    //let onibusOp = [];
    const [onibusOp, setOnibusOp] = useState(null);
    const [onibus, setOnibus] = useState(null);
    const [sentido, setSentido] = useState(null);
    const [result, setResult] = useState(null);

    let filtro = {
        linhaOnibus: '',
        sentido: ''
      };

    useEffect(() => {
        buscarOnibus();
      }, []);

    async function buscarOnibus(e) {
    console.log("entrando na busca de onibus");
    await service
        .buscarOnibus()
        .then((response) => {
            console.log(response);
            setOnibusOp(response.data);
        })
        .catch((error) => {
        console.log(error)
        });
    }

    async function findBy() {

        filtro = {
            linhaOnibus: onibus,
            sentido: sentido
          };


        await service
            .buscar(filtro)
            .then((response) => {
                console.log(response);
                setResult(response.data);
            })
            .catch((error) => {
            console.log(error)
            });
        }

    

    

    const sentidos = [
        'CENTRO',
        'BAIRRO'
    ];


    
    const onChangeOnibus = (e) => {
        setOnibus(e.value);
    }

    const onChangeSent = (e) => {
        setSentido(e.value);
    }

    const buscar = (e) => {
        e.preventDefault();
        findBy();
    }

    const dataFormatada = (e) => {
        var date = new Date(e);
        return date.toLocaleDateString("pt-BR");
    }

    return(

        <S.FormStyle>
            <form onSubmit={buscar}>
                <div>
                    <h5>Ônibus</h5>
                    <Dropdown value={onibus} options={onibusOp} onChange={onChangeOnibus} placeholder="Selecione o Ônibus" />
                </div>
                <div>
                    <h5>Sentido</h5>
                    <Dropdown value={sentido} options={sentidos} onChange={onChangeSent} placeholder="Selecione o sentido" />
                </div>
                <div>
                    <Button label="Buscar" aria-label="Buscar" type="submit" onClick={buscar}/>
                </div>

            </form>

            {result && (
                <div>
                <div className="card">
                    <DataTable value={result} responsiveLayout="scroll">
                        <Column field="local" header="Local"></Column>
                        <Column field="referencia" header="Referência"></Column>
                        <Column field="tipo" header="Tipo"></Column>
                        <Column field="horario" header="Horário"></Column>
                    </DataTable>
                </div>
            </div>
            )
            }

        </S.FormStyle>
    )
}

export default FormBuscar;