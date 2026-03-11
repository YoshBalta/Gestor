import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
      <LinearGradient
      colors={['#F3F4F6', '#F3F4F6', '#C592FC']}
      locations={[0, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    
>
      <View style={styles.rectangulo}>
        <Text style={styles.titulo}>GoVisit</Text>
        <Text style={styles.titulo}> User </Text>
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

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,

  },

  rectangulo:{
    width:'100%',
    height:80,
    backgroundColor:'#4A2E91',
    justifyContent:'space-between',
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center'
  },

  titulo:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    padding:12
  },

  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  botones:{
    flexDirection:'row',
    alignItems:'center',
    width:300,
    height:55,
    backgroundColor:'#6F42C1',
    borderColor:'#7A4ECA',
    borderWidth:3,
    borderRadius:22,
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