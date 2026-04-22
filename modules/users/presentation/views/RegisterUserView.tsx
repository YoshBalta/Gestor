import AlertCard from '@/components/alertCard';
import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { Inputs } from '@/components/Inputs';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function RegisterUserView() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const handleRegister = async () => {

    // 🔥 VALIDACIÓN
    if (!username || !password || !nombre || !apellidos) {
      setMensaje('Completa todos los campos');
      setTipoMensaje('error');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.37/govisit/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          nombre,
          apellidos
        })
      });

      const data = await response.json();

      if (!data.success) {
        setMensaje(data.message || 'Error al registrar usuario');
        setTipoMensaje('error');
        return;
      }

      // 🔥 ÉXITO
      setMensaje('Usuario creado correctamente 🔥');
      setTipoMensaje('success');

      // ⏳ delay para que se vea el mensaje
      setTimeout(() => {
        router.replace('/login');
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
    <BackgroundGradient titulo="Crear Cuenta">

      <View style={styles.form}>

        {/* 🔥 ALERT */}
        <AlertCard message={mensaje} type={tipoMensaje} />

        <Inputs 
          texto='Ingresa tu(s) nombre(s)'
          value={nombre}
          onChangeText={setNombre}
        />

        <Inputs 
          texto='Ingresa tus apellidos'
          value={apellidos}
          onChangeText={setApellido}
        />

        <Inputs 
          texto='Ingresa tu nombre de usuario'
          value={username}
          onChangeText={setUsername}
        />

        <Inputs 
          texto='Ingresa una contraseña'
          value={password}
          onChangeText={setPassword}
          valor={true}
        />

        <BotonMain
          texto='Registrarse'
          onPress={handleRegister}
        />

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  }
});