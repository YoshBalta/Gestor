import { BackgroundGradient } from '@/components/backgroundGradiente';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterUserView() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BackgroundGradient titulo="Crear Cuenta">

      <View style={styles.form}>

        <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
        <TextInput placeholder="Apellidos" value={apellido} onChangeText={setApellido} style={styles.input} />
        <TextInput placeholder="Usuario" value={user} onChangeText={setUser} style={styles.input} />
        <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/vistas/menu')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  button: {
    width: '100%',
    backgroundColor: '#4A2E91',
    padding: 14,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});