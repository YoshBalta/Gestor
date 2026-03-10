import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.contenedor}>

      <Text style={styles.text}>Hola</Text>

      <View style={styles.contenedorButtons}>
      <TouchableOpacity style={styles.alinear}>
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.textButtons}>Agregar visitante</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.contenedorButtons}>
      <TouchableOpacity style={styles.alinear}>
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.textButtons}>Consultar Historial</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.contenedorButtons}>
      <TouchableOpacity style={styles.alinear}>
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.textButtons}>Agregar usuario</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.contenedorButtons}>
      <TouchableOpacity style={styles.alinear}>
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.textButtons}>Registrar salida de visitante</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Ffff'
  },
  contenedorButtons:{
    borderRadius: 10,
    height: 40,
    width:250,
    backgroundColor: '#8d1a83',
    marginBottom:40,
  },
  textButtons:{
    color:'#ffff',
    textAlign:'center',
    fontSize:15,
    fontWeight: '600',
    paddingLeft:10,
    marginTop:1
  },
 text: {
  fontSize: 12,
  color: "#ffffff"
 },
 alinear:{
  flexDirection: 'row',
  paddingTop:7,
  marginLeft:15
 }
});
