import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DashboardView() {

  const { user, setUser } = useAuth();

  if (!user) {
    return (
      <BackgroundGradient titulo="Inicio">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleLogout = () => {
    setUser(null);
    router.replace('/');
  };

  return (
    <BackgroundGradient titulo="Inicio">

      <View style={styles.container}>

       <BotonMain
          texto='Mi Qr'
          onPress={()=>''}
          icono='qr-code'
       ></BotonMain>

        <BotonMain 
          texto='Mi historial'
          onPress={()=>router.push('/historial')}
          icono='history'
        ></BotonMain>

        <BotonMain
        texto='Mi perfil'
        onPress={()=>router.push('/perfil')}
        icono='person'></BotonMain>

        <Text style={styles.estado}>Estado: 🟢 Dentro</Text>

        <BotonMain
        texto='Cerrar Sesion'
        color="#FF3B30"
        bordeColor='#ee362c'
        onPress={()=>''}></BotonMain>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
    color: '#4A2E91',
    fontWeight: 'bold'
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
  estado: {
    marginTop: 20,
    marginBottom:20,
    fontSize: 18,
    color: '#4A2E91',
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