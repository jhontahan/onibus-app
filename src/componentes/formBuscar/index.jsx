import React, { useState } from "react";
import * as S from "./style"
import { InputText } from 'primereact/inputtext';

function FormBuscar(){

    const [value2, setValue2] = useState('');

    return(
        <S.FormStyle>
            <span className="p-float-label">
                <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="username">Username</label>
            </span>
        </S.FormStyle>
    )
}

export default FormBuscar;