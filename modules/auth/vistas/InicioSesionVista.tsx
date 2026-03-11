import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function InicioSesionVista() {

  const iniciarSesion = () => {
    router.push("/menu");
  };

  return (
    <View>

      <Text>Login</Text>

      <TouchableOpacity onPress={iniciarSesion}>
        <Text>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}