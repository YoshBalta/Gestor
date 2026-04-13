import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    const response = await fetch('http://192.168.1.42/govisit/historial.php', {
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

type Registro = {
  tipo: string;
  fecha: string;
};

  return (
    <BackgroundGradient titulo="Mi Historial">

      <View style={styles.container}>

      {registros.map((item, index) => (
  <View key={index} style={styles.item}>
          <Text>
  {item.tipo === 'entrada' ? '🟢 Entrada' : '🔴 Salida'}
</Text>
    <Text>{new Date(item.fecha).toLocaleString()}</Text>


  </View>
))}

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
  },
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