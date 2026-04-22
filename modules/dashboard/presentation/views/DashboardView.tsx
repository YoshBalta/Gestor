import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { useAuth } from '@/context/AuthContext';
import { router, Stack, useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DashboardView() {

  const { user, setUser } = useAuth();
  const [estado, setEstado] = useState('cargando...');
  const [fecha, setFecha] = useState('');

  useFocusEffect(
  useCallback(() => {
    obtenerEstado();
  }, [])
);

  const obtenerEstado = async () => {

  if (!user) return;

  try {
    const response = await fetch('http://192.168.1.37/govisit/estado.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id })
    });

    const data = await response.json();

    if (data.success) {
      setEstado(data.estado);
      setFecha(data.fecha);
    }

  } catch (error) {
    console.log(error);
  }
};


  if (!user) {
    return (
      <BackgroundGradient titulo="Inicio">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleLogout = () => {
    setUser(null);
    router.replace('/login');
  };

  return (
    <BackgroundGradient titulo="Inicio">

      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        {/* 🔥 BIENVENIDA */}
        <Text style={styles.welcome}>
          Bienvenido, {user.nombre}
        </Text>

       <BotonMain
          texto='Mi Qr'
          onPress={()=>router.push('/qr')}
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

        <View style={styles.cardEstado}>

          <Text style={styles.estadoText}>
            {estado === 'cargando...'
              ? '⏳ Cargando...'
              : estado === 'dentro'
                ? '🟢 Dentro'
                : '🔴 Fuera'}
          </Text>

          {fecha && (
            <Text style={styles.fechaText}>
              Último registro:
              {'\n'}
              {new Date(fecha).toLocaleString()}
            </Text>
          )}

        </View>

        <BotonMain
        texto='Cerrar Sesion'
        color="#FF3B30"
        bordeColor='#ee362c'
        onPress={handleLogout}></BotonMain>

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
  estadoText: {
  fontSize: 20,
  fontWeight: 'bold',
},
  fechaText: {
  marginTop: 10,
  color: '#555',
  textAlign: 'center'
},
  cardEstado: {
  width: '100%',
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 15,
  elevation: 5,
  alignItems: 'center',
  marginTop: 20,
  marginBottom:30
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