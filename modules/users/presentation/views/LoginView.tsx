import { BackgroundGradient } from '@/components/backgroundGradiente'; //
import { BotonMain } from '@/components/buttons';
import { InputsLogueo } from '@/components/InputsLogueo';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

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

        <InputsLogueo
          texto='Usuario'
          value={user}
          onChangeText={(text: any) => setUser(text)}
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
       onPress={() => router.push('/vistas/menu')}
       ></BotonMain>

       <BotonMain
       texto='Crear Cuenta'
       onPress={() => router.push('/register')}
       ></BotonMain>

      </View>

    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  form: {
    flex:1,
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