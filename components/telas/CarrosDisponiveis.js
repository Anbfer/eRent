import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const carrosEletricos = [
  {
    id: 1,
    image: require('../icones/Nissan_Leaf.png'),
    valorDia: 'R$ 100,00/dia',
    nome: 'Renault',
    subnome: 'Duster',
  },
  {
    id: 2,
    image: require('../icones/Nissan_Leaf.png'),
    valorDia: 'R$ 120,00/dia',
    nome: 'Chevrolet ',
    subnome: 'Onix Plus',
  },
];

const carrosHibridos = [
  {
    id: 3,
    image: require('../icones/Nissan_Leaf.png'),
    valorDia: 'R$ 100,00/dia',
    nome: 'Volvo',
    subnome: 'XC40',
  },
  {
    id: 4,
    image: require('../icones/Nissan_Leaf.png'),
    valorDia: 'R$ 80,00/dia',
    nome: 'Nissan',
    subnome: 'Leaf ',
  },
];

const renderCarro = (carro, navigation) => (
    <View
      key={carro.id}
      style={[
        styles.carContainer,
        carro.eletrico ? styles.carEletrico : styles.carHibrido,
      ]}>
      <View>
        <Image source={carro.image} style={styles.carImage} />
      </View>
      <View style={styles.carInfoContainer}>
        <Text style={styles.carName}>{carro.nome}</Text>
        <Text style={styles.carSubnome}>{carro.subnome}</Text>
        <Text style={styles.carValor}>{carro.valorDia}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confirma Agendamento', { carroId: carro.id })}>
          <Text style={styles.buttonText}>Alugar</Text>
        </TouchableOpacity>
      </View>
    </View>
);

const CarrosDisponiveis = () => {
  const navigation = useNavigation();

  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>Carros Elétricos</Text>
      {carrosEletricos
        .map((carro) => renderCarro({ ...carro, eletrico: true }, navigation))}

      <Text style={styles.title}>Carros Híbridos</Text>
      {carrosHibridos
        .map((carro) => renderCarro({ ...carro, eletrico: false }, navigation))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B264F',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '20%',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'roboto',
    color: '#ffffff',
    fontSize: windowWidth * 0.06, // Tamanho do título relativo à largura da tela
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  carContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    width: windowWidth * 0.9, // Largura relativa à largura da tela
  },
  carEletrico: {
    backgroundColor: '#669BBC',
  },
  carHibrido: {
    backgroundColor: '#748CAB',
  },
  carImage: {
    width: windowWidth * 0.3, // Tamanho da imagem relativo à largura da tela
    height: windowWidth * 0.3, // Tamanho da imagem relativo à largura da tela
    borderRadius: 10,
    marginRight: 10,
  },
  carInfoContainer: {
    flex: 1,
  },
  carName: {
    fontSize: windowWidth * 0.035, // Tamanho da fonte relativo à largura da tela
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carSubnome: {
    fontSize: windowWidth * 0.03, // Tamanho da fonte relativo à largura da tela
    marginBottom: 5,
  },
  carValor: {
    fontSize: windowWidth * 0.03, // Tamanho da fonte relativo à largura da tela
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: windowWidth * 0.015, // Tamanho do padding relativo à largura da tela
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: windowWidth * 0.03, // Tamanho da fonte relativo à largura da tela
  },
});

export default CarrosDisponiveis;
