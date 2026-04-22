import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRView() {

  const { user } = useAuth();

  if (!user) {
    return (
      <BackgroundGradient titulo="Mi QR">
        <Text>No hay usuario logueado</Text>
      </BackgroundGradient>
    );
  }

  return (
    <BackgroundGradient titulo="Mi QR">

      <View style={styles.container}>

        <View style={styles.card}>
          <QRCode
            value={user.id.toString()}
            size={200}
            logoSize={30}
            logoBackgroundColor="transparent"
            logo={require('@/assets/images/logoIn.png')}
          />
        </View>

        <Text style={styles.name}>
          {user.nombre} {user.apellidos}
        </Text>

        <Text style={styles.id}>
          ID: {user.id}
        </Text>

        <Text style={styles.info}>
          Muestra este código para registrar tu entrada o salida
        </Text>

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