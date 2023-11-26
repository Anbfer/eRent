import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Especificacoes = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>ESPECIFICACOES</Text>
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

export default Especificacoes;