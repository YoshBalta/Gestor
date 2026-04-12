import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRView() {

  const { user } = useAuth();

  // 🔥 VALIDACIÓN AQUÍ (NO dentro de funciones)
  if (!user) {
    return (
      <BackgroundGradient titulo="Mi QR">
        <Text>No hay usuario logueado</Text>
      </BackgroundGradient>
    );
  }

  const registrarEntradaSalida = async () => {
    try {
      const response = await fetch('http://192.168.1.42/govisit/registrar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id })
      });

      const data = await response.json();

      alert(`Se registró: ${data.tipo}`);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackgroundGradient titulo="Mi QR">

      <View style={styles.container}>

        <View style={styles.card}>
          <QRCode
            value={user.id.toString()}
            size={200}
          />
        </View>

        <Text style={styles.name}>{user.nombre}</Text>
        <Text style={styles.id}>ID: {user.id}</Text>

        <Text style={styles.info}>
          Muestra este código al ingresar o salir
        </Text>

        <TouchableOpacity onPress={registrarEntradaSalida} style={{ marginTop: 20 }}>
  <Text style={{ color: '#4A2E91', fontWeight: 'bold' }}>
    Registrar entrada/salida
  </Text>
</TouchableOpacity>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    elevation: 5
  },
  name: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A2E91'
  },
  id: {
    marginTop: 5,
    color: '#555'
  },
  info: {
    marginTop: 20,
    textAlign: 'center',
    color: '#777'
  }
});