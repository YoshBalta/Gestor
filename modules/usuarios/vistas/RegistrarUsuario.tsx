/*Corresponde a tu pantalla:

“REGISTRAR usuario / contraseña”*/

import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/botones";
import { InputsLogueo } from "@/components/InputsLogueo";
import { router } from "expo-router";

export default function RegistrarUsuario(){

      const RegistrarUsuario= () => {
        router.push("/menu");
      };
      
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