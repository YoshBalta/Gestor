/*Corresponde a tu pantalla:

“REGISTRAR usuario / contraseña”*/

import { BackgroundGradient } from "@/components/backgroundGradiente";
import { Inputs } from "@/components/Inputs";

export default function RegistrarUsuario(){

    return(

        <BackgroundGradient
        titulo="REGISTRAR ">
            <Inputs 
            texto="Usuario">
            </Inputs>

            <Inputs
            texto="Contraseña"
            valor={true}>
            </Inputs>

        </BackgroundGradient>

    );
}