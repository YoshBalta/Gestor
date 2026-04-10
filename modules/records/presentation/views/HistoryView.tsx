import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HistorialView() {

  const { user } = useAuth();

  if (!user) {
    return (
      <BackgroundGradient titulo="Historial">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const historial = [
    { id: '1', tipo: 'Entrada', fecha: '2026-04-10', userId: 1 },
    { id: '2', tipo: 'Salida', fecha: '2026-04-10', userId: 1 },
    { id: '3', tipo: 'Entrada', fecha: '2026-04-09', userId: 2 },
  ];

  const misRegistros = historial.filter(
    (item) => item.userId === user.id
  );

  return (
    <BackgroundGradient titulo="Mi Historial">

      <View style={styles.container}>

        {misRegistros.length === 0 ? (
          <Text>No hay registros</Text>
        ) : (
          <FlatList
            data={misRegistros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.tipo}>{item.tipo}</Text>
                <Text>{item.fecha}</Text>
              </View>
            )}
          />
        )}

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  },
  tipo: {
    fontWeight: 'bold',
    color: '#4A2E91'
  }
});