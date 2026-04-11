import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { Inputs } from '@/components/Inputs';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function RegisterUserView() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BackgroundGradient titulo="Crear Cuenta">

      <View style={styles.form}>

        <Inputs 
        texto='Ingresa tu(s) nombre(s)'
        value={nombre}
        onChangeText={setNombre}>
        </Inputs>

         <Inputs 
        texto='Ingresa tus apellidos'
        value={apellido}
        onChangeText={setApellido}>
        </Inputs>

        <Inputs 
        texto='Ingresa tu nombre de usuario'
        value={user}
        onChangeText={setUser}>
        </Inputs>

       <Inputs 
        texto='Ingresa una contraseña'
        value={password}
        onChangeText={setPassword}
        valor={true}>

        </Inputs>

        <BotonMain
        texto='Registrarse'
        onPress={() => router.push('/vistas/menu')}></BotonMain>

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