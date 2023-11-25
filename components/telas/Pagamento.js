import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pagamento = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>PAGAMENTO</Text>
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

export default Pagamento;