import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChangePasswordView() {

  const { user } = useAuth();

  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');

  if (!user) {
    return (
      <BackgroundGradient titulo="Cambiar Contraseña">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleChangePassword = async () => {

    if (!actual || !nueva) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.42/govisit/changePassword.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          actual,
          nueva
        })
      });

      const data = await response.json();

      if (!data.success) {
        Alert.alert('Error', data.message);
        return;
      }

      Alert.alert('Éxito', 'Contraseña actualizada');

      router.back();

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Error de conexión');
    }
  };

  return (
    <BackgroundGradient titulo="Cambiar Contraseña">

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Contraseña actual"
          value={actual}
          onChangeText={setActual}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          value={nueva}
          onChangeText={setNueva}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
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