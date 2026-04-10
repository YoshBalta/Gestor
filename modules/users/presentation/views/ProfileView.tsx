import { BackgroundGradient } from "@/components/backgroundGradiente";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileView() {
  const user = {
    nombre: "Kevin",
    apellidos: "Torres Cortez",
    username: "kevin123",
    correo: "kevin@email.com",
  };

  return (
    <BackgroundGradient>
      <View style={styles.container}>

        <Text style={styles.title}>Mi Perfil</Text>

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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logout]}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>

      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "transparent", // IMPORTANTE para que se vea el gradiente
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
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