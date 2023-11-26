import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Pagamento = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.retangulo}>
        <Text style={styles.texto}>
          Aproxime seu celular
        </Text>
        <Text style={styles.texto}>
         para realizar o pagamento!
        </Text>
      </View>

      <View style={styles.content}>
      <TouchableOpacity onPress={()=> navigation.navigate('Confirma Pagamento')}>
        <Image
          source={require('../icones/NFC.png')}
          style={styles.centralImage}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#1B264F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralImage: {
    width: 200,
    height: 200,
  },
  retangulo: {
    position: 'absolute',
    top: '20%', // Definindo para 50% da altura
    left: 50,
    right: 0,
    marginHorizontal: 50, // Margem horizontal de 50 unidades
    width: 300,
    height: 100,
    backgroundColor: '#748CAB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,
    marginLeft: 'auto', // Margem esquerda automática
    marginRight: 'auto', // Margem direita automática
  },
  texto: {
    color:'#fff',
  },
});

export default Pagamento;
