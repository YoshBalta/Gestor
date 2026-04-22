import AlertCard from '@/components/alertCard';
import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { InputsLogueo } from '@/components/InputsLogueo';
import { useAuth } from '@/context/AuthContext';
import { router, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoginScreen() {

  const [user, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const { setUser } = useAuth();

  const handleLogin = async () => {

    if (!user || !password) {
      setMensaje('Completa todos los campos');
      setTipoMensaje('error');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.37/govisit/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user,
          password: password
        })
      });

      const data = await response.json();

      if (!data.success) {
        setMensaje(data.message || 'Error al iniciar sesión');
        setTipoMensaje('error');
        return;
      }

      setMensaje('Inicio de sesión exitoso');
      setTipoMensaje('success');

      setUser(data.user);

      setTimeout(() => {
        router.replace('/vistas/menu');
      }, 1000);

    } catch (error) {
      console.log(error);
      setMensaje('Error de conexión');
      setTipoMensaje('error');
    }
  };

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <>
      {/* 🔥 ESTO ELIMINA LA FLECHA */}
      <Stack.Screen options={{ headerShown: false }} />

      <BackgroundGradient titulo="Iniciar Sesión">

        <View style={styles.form}>

          <AlertCard message={mensaje} type={tipoMensaje} />

          <InputsLogueo
            texto='Usuario'
            value={user}
            onChangeText={(text: any) => setUserInput(text)}
            icono='person'
          />

          <InputsLogueo
            texto='Contraseña'
            value={password}
            onChangeText={setPassword}
            valor={true}
            icono='key'
          />

          <BotonMain
            texto='Iniciar Sesión'
            onPress={handleLogin}
          />

          <BotonMain
            texto='Crear Cuenta'
            onPress={() => router.push('/register')}
          />

        </View>

      </BackgroundGradient>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    alignItems: 'center'
  }
});