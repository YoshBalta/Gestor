import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfileView() {

  const { user, setUser } = useAuth();

  const [nombre, setNombre] = useState(user?.nombre || '');
  const [apellidos, setApellidos] = useState(user?.apellidos || '');

  if (!user) {
    return (
      <BackgroundGradient titulo="Editar Perfil">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleUpdate = async () => {

    if (!nombre || !apellidos) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.42/govisit/updateUser.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          nombre,
          apellidos
        })
      });

      const data = await response.json();

      if (!data.success) {
        Alert.alert('Error', data.message);
        return;
      }

      // 🔥 actualizar context
      setUser({
        ...user,
        nombre,
        apellidos
      });

      Alert.alert('Éxito', 'Perfil actualizado');

      router.back();

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Error de conexión');
    }
  };

  return (
    <BackgroundGradient titulo="Editar Perfil">

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={setApellidos}
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 40
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    width: '100%',
    backgroundColor: '#4A2E91',
    padding: 15,
    borderRadius: 12
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});