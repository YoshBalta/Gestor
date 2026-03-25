import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  titulo?:string,
  children: React.ReactNode; //le dice a react que puede estar renderizando diferentes componentes
}

export const BackgroundGradient = ({ children,titulo }: Props) => {
  return (
    <LinearGradient
      colors={['#F3F4F6', '#F3F4F6', '#C592FC']}
      locations={[0, 0.7, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
         {/* Encabezado */}
        <SafeAreaView style={styles.rectangulo}>
                <Text style={styles.titulo}>GoVisit</Text>
                <Text style={styles.titulo}>User</Text>{/*Este campo debe llenarse automaticamente con el user del usuario logueado*/}
        </SafeAreaView>

            <View style={styles.content}>

              <Text style={styles.Mensaje}>{titulo}</Text>
                    {children}
            </View>

         <View style={styles.rectangulo2}></View>
    </LinearGradient>
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
    paddingLeft: 2,
    flexDirection:'row',
    alignItems:'center'
  
  }, rectangulo2: {
    width: '100%',
    height: '5%',
    backgroundColor: '#4A2E91',
    justifyContent: 'space-between',
    paddingLeft: 20,
    flexDirection:'row',
    alignItems:'center',
  
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding:5
  },
    content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'column',
    padding:20
  },
  Mensaje: {
    color: '#4A2E91',
    fontSize: 32,
    fontWeight: 'bold'
  },
});