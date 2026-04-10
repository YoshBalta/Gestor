import { BackgroundGradient } from '@/components/backgroundGradiente';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardView() {

  return (
    <BackgroundGradient titulo="Inicio">

      <View style={styles.container}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Mi QR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('/historial')}>
          <Text style={styles.text}>Mi historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('/perfil')}>
          <Text style={styles.text}>Mi perfil</Text>
        </TouchableOpacity>

        <Text style={styles.estado}>Estado: 🟢 Dentro</Text>

        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>

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