import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  titulo?: string,
  children: React.ReactNode;
}

export const BackgroundGradient = ({ children, titulo }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <LinearGradient
        colors={['#F3F4F6', '#F3F4F6', '#C592FC']}
        locations={[0, 0.7, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        {/* Encabezado */}
        <View style={styles.rectangulo}>
           <TouchableOpacity  onPress={() => router.back()}>
               <MaterialIcons name='arrow-back' size={24} color="#E8D9FF" />
           </TouchableOpacity>
          <Text style={styles.titulo}>GoVisit</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.alinear}>
            <Text style={styles.Mensaje}>{titulo}</Text>
          </View>

          {children}
        </View>

        <View style={styles.rectangulo2}></View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
   rectangulo: {
    width: '100%',
    height: '10%',
    backgroundColor: '#4A2E91',
    justifyContent: 'space-between',
    padding:15,
    flexDirection:'row',
    alignItems:'center'
  
  }, rectangulo2: {
    width: '100%',
    height: '2%',
    backgroundColor: '#4A2E91'
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding:5,
    
  },
    content: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection:'column',
    padding:20
  },
  Mensaje: {
    color: '#4A2E91',
    fontSize: 32,
    fontWeight: 'bold',    
  },
  alinear:{
    flexDirection:'row',
    justifyContent:'center'
  },
  safeArea: {
  flex: 1,
  backgroundColor: '#4A2E91', 
},
  back:{
    
  }
});