import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileView() {
  const user = {
    nombre: "Kevin",
    apellidos: "Torres Cortez",
    username: "kevin123",
    correo: "kevin@email.com",
  };

  return (
    <BackgroundGradient 
    titulo="Mi Perfil">
      <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>{user.nombre}</Text>

          <Text style={styles.label}>Apellidos</Text>
          <Text style={styles.value}>{user.apellidos}</Text>

          <Text style={styles.label}>Usuario</Text>
          <Text style={styles.value}>{user.username}</Text>

          <Text style={styles.label}>Correo</Text>
          <Text style={styles.value}>{user.correo}</Text>
        </View>

       <BotonMain
       texto="Editar Perfil"
       color="#007AFF"
       bordeColor="#007AFF"
       onPress={()=>''}
       ></BotonMain>

       <BotonMain
       texto="Cambiar contraseña"
       color="#007AFF"
       bordeColor="#007AFF"
       onPress={()=>''}
       ></BotonMain>

      

      <BotonMain
       texto="Cerrar sesión"
       color="#FF3B30"
       bordeColor="#ee362c"
       onPress={()=>''}
       ></BotonMain>

      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    flex:1
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  logout: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});