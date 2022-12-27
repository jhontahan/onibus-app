import React, { useState } from "react";
import * as S from "./style"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import BairroService from "../../services/bairroService";


function FormCadBairro(){

    const service = new BairroService();

    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');

    

    async function salvar(e){
        e.preventDefault();

        const data = {
            bairro, rua
        };

        await service.salvar(data)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            });
    }

    return(
        <S.FormStyle>
            <Form onSubmit={salvar}>
            <Form.Group className="mb-3" controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Ex:.. Raposa" onChange={(e) => setBairro(e.target.value)}/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRuas">
                <Form.Label>Ruas</Form.Label>
                <Form.Control type="text" placeholder="Ex:.. Rua x, Rua y" onChange={(e) => setRua(e.target.value)}/>
                
            </Form.Group>

            <Button variant="success" className="salvar" type="submit" onClick={() => salvar()}>
                <i className="pi pi-save" />Salvar
            </Button>
            </Form>

        </S.FormStyle>
    )
}

export default FormCadBairro;