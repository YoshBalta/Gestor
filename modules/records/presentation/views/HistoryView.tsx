import { BackgroundGradient } from '@/components/backgroundGradiente'; //
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: '1', tipo: 'Entrada', fecha: '09/04/2026', hora: '08:02' },
  { id: '2', tipo: 'Salida', fecha: '09/04/2026', hora: '14:15' },
  { id: '3', tipo: 'Entrada', fecha: '08/04/2026', hora: '08:05' },
];

export default function History() {

  return (
    <BackgroundGradient titulo="Historial">

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tipo}>
              {item.tipo === 'Entrada' ? '🟢 Entrada' : '🔴 Salida'}
            </Text>

            <Text style={styles.fecha}>
              {item.fecha} - {item.hora}
            </Text>
          </View>
        )}
      />

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A2E91'
  },
  fecha: {
    marginTop: 5,
    color: '#555'
  }
});