import { StyleSheet, Text, View } from 'react-native';

export default function AlertCard({ message, type }) {

  if (!message) return null;

  return (
    <View style={[
      styles.container,
      type === 'success' ? styles.success : styles.error
    ]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: '100%'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  success: {
    backgroundColor: '#34C759'
  },
  error: {
    backgroundColor: '#FF3B30'
  }
});