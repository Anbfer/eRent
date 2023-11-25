import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reserva = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Tela 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Reserva;