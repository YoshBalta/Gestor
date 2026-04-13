import { BackgroundGradient } from "@/components/backgroundGradiente";
import { BotonMain } from "@/components/buttons";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <BackgroundGradient 
    titulo="Mi Perfil">
      <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.name}>{user.nombre} {user.apellidos}</Text>
          <Text style={styles.info}>ID: {user.id}</Text>
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
       onPress={handleLogout  }
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
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    flex:1
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