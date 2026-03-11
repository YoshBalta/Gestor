import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.rectangulo}>
        <Text style={styles.titulo}>GoVisit</Text>
      </View>

      <View style={styles.content}>

        <TouchableOpacity style={styles.botones}>
          <MaterialIcons name="person-add" size={24} color="white" />
          <Text style={styles.textButtons}>Agregar visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botones}>
          <MaterialIcons name="history" size={24} color="white" />
          <Text style={styles.textButtons}>Consultar historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botones}>
          <MaterialIcons name="person-add-alt" size={24} color="white" />
          <Text style={styles.textButtons}>Agregar usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botones}>
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.textButtons}>Registrar salida</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#F5F5F5'
  },

  rectangulo:{
    width:'100%',
    height:80,
    backgroundColor:'#8d1a83',
    justifyContent:'center',
    paddingLeft:20,
  },

  titulo:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  botones:{
    flexDirection:'row',
    alignItems:'center',
    width:260,
    height:55,
    backgroundColor:'#8d1a83',
    borderRadius:12,
    paddingHorizontal:15,
    marginBottom:30,

    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:5,
    elevation:4
  },

  textButtons:{
    color:'white',
    fontSize:16,
    fontWeight:'600',
    marginLeft:15
  }

});