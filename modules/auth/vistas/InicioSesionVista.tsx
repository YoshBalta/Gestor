import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/botones";
import { Inputs } from "@/components/Inputs";
import { router } from "expo-router";

export default function InicioSesionVista() {

  const iniciarSesion = () => {
    router.push("/menu");
  };

  return (
    
    <BackgroundGradient
    titulo="Hola">

      <Inputs  
      texto="Usuario"/>

      <Inputs
      texto="Contraseña" 
      valor={true}/>

      <BotonMain 
      texto="Iniciar Sesión"
      onPress={iniciarSesion}
      >
      </BotonMain>

    </BackgroundGradient>
  );
}