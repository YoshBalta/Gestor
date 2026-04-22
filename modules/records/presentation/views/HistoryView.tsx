import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Registro = {
  tipo: string;
  fecha: string;
};

export default function HistorialView() {

  const [registros, setRegistros] = useState<Registro[]>([]);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      obtenerHistorial();
    }, [])
  );

  const obtenerHistorial = async () => {
    if (!user) return;

    try {
      const response = await fetch('http://192.168.1.37/govisit/historial.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id })
      });

      const data = await response.json();

      if (!data.success) return;

      setRegistros(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackgroundGradient titulo="Mi Historial">

      <View style={{ flex: 1, width: '100%', marginTop: 20 }}>

        <FlatList
          data={registros}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              No hay registros
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
              
              <Text style={{
                fontWeight: 'bold',
                color: item.tipo === 'entrada' ? 'green' : 'red'
              }}>
                {item.tipo === 'entrada' ? '🟢 Entrada' : '🔴 Salida'}
              </Text>

              <Text style={{ color: '#555' }}>
                {new Date(item.fecha).toLocaleString()}
              </Text>

            </View>
          )}
        />

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3
  },
});