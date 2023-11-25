import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarrosDisponiveis = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>CARROS DISPONIVEIS</Text>
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

export default CarrosDisponiveis;