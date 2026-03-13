
import { BackgroundGradient } from '@/components/backgroundGradiente';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MenuPrincipal() {
  return (
   <BackgroundGradient >
        {/* Tus botones con tus rutas, pero con el estilo nuevo */}
        <TouchableOpacity 
          style={styles.botones}
          onPress={() => router.push("/visitas/agregar")}
        >
          <MaterialIcons name="person-add" size={24} color="white" />
          <Text style={styles.textButtons}>Agregar visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botones}
          onPress={() => router.push("/visitas/historial")}
        >
          <MaterialIcons name="history" size={24} color="white" />
          <Text style={styles.textButtons}>Consultar historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botones}
          onPress={() => router.push("/registrar")}>
          <MaterialIcons name="person-add-alt" size={24} color="white" />
          <Text style={styles.textButtons}>Agregar usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botones}
          onPress={() => router.push("/visitas/salida")}
        >
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.textButtons}>Registrar salida</Text>
        </TouchableOpacity>

      
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangulo: {
    width: '100%',
    height: 80,
    backgroundColor: '#8d1a83',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botones: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300, // Lo hizo un poco más ancho (antes 260)
    height: 55,
    backgroundColor: '#6F42C1', // Color nuevo de tu amigo
    borderColor: '#7A4ECA',     // Borde nuevo
    borderWidth: 3,
    borderRadius: 22,           // Más redondeado (antes 12)
    paddingHorizontal: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  textButtons: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15
  }
});