import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/botones";
import { Inputs } from "@/components/Inputs";

//para la pantalla de los campos de agregar nombre, proposito
export default function AgregarVisitante() {
    return (
         <BackgroundGradient 
         titulo="AGREGAR VISITANTE">

            <Inputs
            texto="Nombre(s)">
            </Inputs>
            <Inputs
            texto="Apellidos">
            </Inputs>
            <Inputs
            texto="Proposito de la visita..."></Inputs>

            <BotonMain 
            texto="Registrar Visita"
            onPress={()=>""}></BotonMain>

         </BackgroundGradient>
    );
}