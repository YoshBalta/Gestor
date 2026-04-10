import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext'; // 👈 IMPORTANTE
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {

  const [user, setUserInput] = useState(''); // 👈 renombrado
  const [password, setPassword] = useState('');

  const { setUser } = useAuth(); // 👈 contexto

  const handleLogin = () => {
    if (!user || !password) {
      alert('Completa todos los campos');
      return;
    }

    // 🔥 simulamos login
    setUser({
      id: 1,
      nombre: user
    });

    // 🔥 navegación (ajusta según tu estructura)
    router.push('/vistas/menu'); 
  };

  return (
    <BackgroundGradient titulo="Iniciar Sesión">

      <View style={styles.form}>

        <TextInput
          placeholder="Usuario"
          value={user}
          onChangeText={setUserInput}
          style={styles.input}
        />

        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/register')}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginTop: 30,
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
  },
  link: {
    marginTop: 20,
    color: '#4A2E91',
    fontWeight: 'bold'
  }
});