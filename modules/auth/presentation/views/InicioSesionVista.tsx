import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/botones";
import { InputsLogueo } from "@/components/InputsLogueo";
import { router } from "expo-router";

export default function InicioSesionVista() {

  const iniciarSesion = () => {
    router.push("/vistas/menu");
  };

  return (
    
    <BackgroundGradient
    titulo="Hola">

      <InputsLogueo  
      texto="Usuario"
      icono="person"/>

      <InputsLogueo
      texto="Contraseña" 
      valor={true}
      icono="key"/>

      <BotonMain 
      texto="Iniciar Sesión"
      onPress={iniciarSesion}
      >
      </BotonMain>

    </BackgroundGradient>
  );
}