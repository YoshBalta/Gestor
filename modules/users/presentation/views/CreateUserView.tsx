/*Corresponde a tu pantalla:

“REGISTRAR usuario / contraseña”*/

import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { InputsLogueo } from "@/components/InputsLogueo";
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';


export default function RegistrarUsuario(){

    const [valueRol, setValueRol] = useState(null)
    const [dataRol, setDataRol] = useState([{label: '', value: ''}])
      const RegistrarUsuario= () => {
        router.push("/vistas/menu");
      };

    const getRol = async () =>{
        try {
            const response = await axios.get("http://localhost/govisit/obtenerRoles.php");
            if(response.data.status == 'success'){
                const data = response.data.data;
                data.forEach((element:any) => {
                    dataRol.push({label:element.nombre, value: element.id})
                });
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getRol()
    }, [])
      
    return(

        <BackgroundGradient
        titulo="REGISTRAR ">

            <InputsLogueo 
            texto="Nombre(s)"
            icono="person">
            </InputsLogueo>

             <InputsLogueo 
            texto="Apellido(s)"
            >
            </InputsLogueo>

            <InputsLogueo 
            texto="Usuario"
            icono="person">
            </InputsLogueo>

            <Dropdown
                data={dataRol}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Buscar"
                value={valueRol}
                onChange={(item:any) => {
                    setValueRol(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                    size={20}
                    />
                )}
                />

            <InputsLogueo
            texto="Contraseña"
            valor={true}
            icono="password">
            </InputsLogueo>

            <BotonMain
            texto="Registrar Usuario"
            onPress={()=>''}></BotonMain>

        </BackgroundGradient>

    );
}