import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.text}>Hola</Text>
      <TouchableOpacity>
        <Text>Agregar visitante</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 text: {
  fontSize: 12,
  color: "#ffffff"
 }
});
