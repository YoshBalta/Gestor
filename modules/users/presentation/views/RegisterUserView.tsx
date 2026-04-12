import { BackgroundGradient } from '@/components/backgroundGradiente';
import { BotonMain } from '@/components/buttons';
import { Inputs } from '@/components/Inputs';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function RegisterUserView() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleRegister = async () => {
    if (!username || !password || !nombre || !apellidos) {
      alert('Completa todos los campos');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.42/govisit/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          nombre,
          apellidos
        })
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert('Usuario creado correctamente 🔥');

      // 👇 regresar al login
      router.replace('/login');

    } catch (error) {
      console.log(error);
      alert('Error de conexión');
    }
  };

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
        value={apellidos}
        onChangeText={setApellido}>
        </Inputs>

        <Inputs 
        texto='Ingresa tu nombre de usuario'
        value={username}
        onChangeText={setUsername}>
        </Inputs>

       <Inputs 
        texto='Ingresa una contraseña'
        value={password}
        onChangeText={setPassword}
        valor={true}>

        </Inputs>

        <BotonMain
        texto='Registrarse'
        onPress={handleRegister}></BotonMain>

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