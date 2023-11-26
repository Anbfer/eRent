import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {

  const navigation = useNavigation();

  const irParaTela = (nomeTela) => {
    navigation.navigate(nomeTela);
  };

  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.eRent}>E-Rent<Image style={styles.folha} source={require('../icones/Folha.png')}/></Text>
        </View>
        <View style={styles.menu}>
          {/* Navegação para outras telas */}
          <TouchableOpacity onPress={() => irParaTela('Tela Inicial')}>
            <Image
              style={styles.menuItem}
              source={require('../icones/paginaInicial.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => irParaTela('Agendamentos')}>
            <Image
              style={styles.menuItem}
              source={require('../icones/agendamento.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => irParaTela('Agencias')}>
            <Image
              style={styles.menuItem}
              source={require('../icones/agencias.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => irParaTela('Carros Disponiveis')}>
            <Image
              style={styles.menuItem}
              source={require('../icones/carrosDisponiveis.png')}
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

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#748CAB',
    paddingVertical: '10%',
    height: 60,
  },
  menuItem: {
    width: 32,
    height: 32,
  },
  eRent: {
    flex:1,
    flexDirection: 'row',
    fontSize: 48,
    fontWeight: '600',
    fontFamily: 'Baloo2-SemiBold',
    color: '#fff',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor:'#0D1321'
  },
  folha: {
    marginLeft: 10
  },
});

export default Menu;
