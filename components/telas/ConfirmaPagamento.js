import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ConfirmaPagamento = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../icones/confirmado.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Agendamento confirmado!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B264F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
});

export default ConfirmaPagamento;