import { BackgroundGradient } from "@/components/backgroundGradiente";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileView() {

  const { user, setUser } = useAuth();

  if (!user) {
    return (
      <BackgroundGradient titulo="Mi Perfil">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleLogout = () => {
    setUser(null);
    router.replace('/');
  };

 
  return (
    <BackgroundGradient titulo="Mi Perfil">

      <View style={styles.container}>

       <View style={styles.card}>

        {/* 🔥 LOGO */}
        <Image
          source={require('@/assets/images/logoIn.png')} // 👈 cambia ruta
          style={styles.logo}
          resizeMode="contain"
        />

        {/* 🔥 NOMBRE COMPLETO */}
        <Text style={styles.nombre}>
          {user.nombre} {user.apellidos}
        </Text>

        <View style={styles.infoBox}>
        <Text style={styles.label}>Usuario</Text>
        <Text style={styles.value}>
          @{user.username}
        </Text>
        </View>

        {/* 🔥 INFO */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>{user.nombre}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Apellidos</Text>
          <Text style={styles.value}>{user.apellidos}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.value}>{user.id}</Text>
        </View>

      </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/editProfile')}
        >
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/changePassword')}
        >
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
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
  },
  logo: {
  width: 80,
  height: 80,
  marginBottom: 10
},

infoBox: {
  width: '100%',
  marginTop: 10
},
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A2E91',
    marginBottom: 10
  },
  label: {
    fontSize: 12,
    color: '#777'
  },
   value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center'
  },
   buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A2E91'
  },
  info: {
    marginTop: 10,
    color: '#555'
  },
  button: {
    width: '100%',
    backgroundColor: '#4A2E91',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logout: {
    marginTop: 30
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold'
  }
});