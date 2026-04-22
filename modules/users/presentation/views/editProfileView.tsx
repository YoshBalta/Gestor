import AlertCard from '@/components/alertCard';
import { BackgroundGradient } from '@/components/backgroundGradiente';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfileView() {

  const { user, setUser } = useAuth();

  const [nombre, setNombre] = useState(user?.nombre || '');
  const [apellidos, setApellidos] = useState(user?.apellidos || '');

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  if (!user) {
    return (
      <BackgroundGradient titulo="Editar Perfil">
        <Text>No hay usuario</Text>
      </BackgroundGradient>
    );
  }

  const handleUpdate = async () => {

    if (!nombre || !apellidos) {
      setMensaje('Completa todos los campos');
      setTipoMensaje('error');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.37/govisit/updateUser.php', {
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
        setMensaje(data.message || 'Error al actualizar');
        setTipoMensaje('error');
        return;
      }

      // 🔥 actualizar contexto
      setUser({
        ...user,
        nombre,
        apellidos
      });

      // 🔥 éxito
      setMensaje('Perfil actualizado correctamente');
      setTipoMensaje('success');

      // ⏳ pequeño delay antes de regresar
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
    <BackgroundGradient titulo="Editar Perfil">

      <View style={styles.container}>

        {/* 🔥 ALERT */}
        <AlertCard message={mensaje} type={tipoMensaje} />

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