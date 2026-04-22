import AlertCard from '@/components/alertCard';
import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChangePasswordView() {

  const { user } = useAuth();

  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  if (!user) {
    return (
      <BackgroundGradient titulo="Cambiar Contraseña">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleChangePassword = async () => {

    if (!actual || !nueva) {
      setMensaje('Completa todos los campos');
      setTipoMensaje('error');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.37/govisit/changePassword.php', {
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
        setMensaje(data.message || 'Error al cambiar contraseña');
        setTipoMensaje('error');
        return;
      }

      // 🔥 ÉXITO
      setMensaje('Contraseña actualizada correctamente');
      setTipoMensaje('success');

      // ⏳ pequeño delay para UX
      setTimeout(() => {
        router.back();
      }, 1200);

    } catch (error) {
      console.log(error);
      setMensaje('Error de conexión');
      setTipoMensaje('error');
    }
  };

  // 🔥 AUTO OCULTAR
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <BackgroundGradient titulo="Cambiar Contraseña">

      <View style={styles.container}>

        {/* 🔥 ALERT */}
        <AlertCard message={mensaje} type={tipoMensaje} />

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