import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Agencias = () => {
  const [selectedState, setSelectedState] = useState('');
  const [units, setUnits] = useState([]);

  const handleStateSelect = (state) => {
    // Definindo as unidades correspondentes a cada estado
    let selectedUnits = [];
    switch (state) {
      case 'São Paulo':
        selectedUnits = [
          {
            street: 'Av. Prof. Abraão de Morais',
            number: '2000',
            zipCode: '04123-001',
          },
          {
            street: 'R. da Consolação',
            number: '293',
            zipCode: '01301-100',
          },
          {
            street: 'Av. das Nações Unidas',
            number: '22833',
            zipCode: '04795-100',
          },
          {
            street: 'Av. Moema',
            number: '399',
            zipCode: '04077-021',
          },
          {
            street: 'Av. Pres. Juscelino Kubitschek',
            number: '881',
            zipCode: '04543-000',
          },
          {
            street: 'Piso Passarela, R. Domingos de Morais',
            number: '2564',
            zipCode: '04036-100',
          },
        ];
        break;
      case 'Rio de Janeiro':
        selectedUnits = [
          {
            street: 'Av. Alm. Silvio de Noronha',
            number: '100',
            zipCode: '20021-010',
          },
          {
            street: 'Estrada Intendente Magalhães',
            number: '566',
            zipCode: '21341-331',
          },
          {
            street: 'Av. Carlos Peixoto',
            number: '11',
            zipCode: '22290-090',
          },
        ];
        break;
      case 'Minas Gerais':
        selectedUnits = [
          {
            street: 'Av. Bias Fortes',
            number: '383',
            zipCode: '30170-010',
          },
          {
            street: 'Av. Presidente Carlos Luz',
            number: '645',
            zipCode: '31230-000',
          },
        ];
        break;
      default:
        selectedUnits = [];
        break;
    }
    setUnits(selectedUnits);
    // Aqui você pode inserir os links do Google Maps para cada endereço
    // Exemplo de estrutura:
    const unitsWithLinks = selectedUnits.map((unit, index) => {
      let link = '';
  if (state === 'São Paulo' && index === 0) {
    link = 'https://maps.app.goo.gl/n7ExWfVVoowFi8RY7';
  } else if (state === 'São Paulo' && index === 1) {
    link = 'https://maps.app.goo.gl/3LreiteEe6K59sTC9'; 
  } else if (state === 'São Paulo' && index === 2) {
    link = 'https://maps.app.goo.gl/Tj7pvJumu1twy3K19'; 
  } else if (state === 'São Paulo' && index === 3) {
    link = 'https://maps.app.goo.gl/u362KZB3JwThif2x8'; 
  } else if (state === 'São Paulo' && index === 4) {
    link = 'https://maps.app.goo.gl/MWt6BqxenuaXxc9A9'; 
  } else if (state === 'São Paulo' && index === 5) {
    link = 'https://maps.app.goo.gl/ax7e1tUiXR5DgbVt8';
  }
  if (state === 'Rio de Janeiro' && index === 0) {
    link = 'https://maps.app.goo.gl/xzCZCH92JobTdL4a8';
  } else if (state === 'Rio de Janeiro' && index === 1) {
    link = 'https://maps.app.goo.gl/ctSo8AQdCvFxiRG7A'; 
  } else if (state === 'Rio de Janeiro' && index === 2) {
    link = 'https://maps.app.goo.gl/dEdYevSfGHzyG28a7'; 
  }
  if (state === 'Minas Gerais' && index === 0) {
    link = 'https://maps.app.goo.gl/h4zRisar6cp1Ettr9';
  } else if (state === 'Minas Gerais' && index === 1) {
    link = 'https://maps.app.goo.gl/cDZfkCwDAn4bfNFLA'; 
  }
  return {
    ...unit,
    googleMapsLink: link,
  };
});
    setUnits(unitsWithLinks);
  };
  const openGoogleMaps = (link) => {
    Linking.openURL(link);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Procure Agências pelo seu estado</Text>

      {/* Lista de estados clicáveis */}
      <View style={styles.stateList}>
        <TouchableOpacity style={styles.stateButton} onPress={() => handleStateSelect('São Paulo')}>
          <Text style={styles.stateButtonText}>São Paulo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stateButton} onPress={() => handleStateSelect('Rio de Janeiro')}>
          <Text style={styles.stateButtonText}>Rio de Janeiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stateButton} onPress={() => handleStateSelect('Minas Gerais')}>
          <Text style={styles.stateButtonText}>Minas Gerais</Text>
        </TouchableOpacity>
      </View>

      {/* Exibir unidades correspondentes ao estado selecionado */}
       {units.length > 0 && (
        <View>
          {units.map((unit, index) => (
            <TouchableOpacity
              key={index}
              style={styles.addressContainer}
              onPress={() => openGoogleMaps(unit.googleMapsLink)}
            >
              <Text style={styles.addressText}>{`${unit.street}, ${unit.number}, CEP ${unit.zipCode}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B264F',
    paddingHorizontal: windowWidth * 0.05, // Ajuste para padding responsivo
    paddingTop: '20%',
  },
  headerText: {
    color: 'white',
    fontSize: windowWidth * 0.07, // Tamanho de fonte responsivo
    marginBottom: 10,
    textAlign:'center'
  },
  stateList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  stateButton: {
    backgroundColor: '#003049',
    borderRadius: 10,
    paddingHorizontal: windowWidth * 0.03, // Ajuste para padding responsivo
    paddingVertical: windowWidth * 0.03, // Ajuste para padding responsivo
  },
  stateButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04, // Tamanho de fonte responsivo
    textAlign:'center'
  },
  addressContainer: {
    backgroundColor: '#3E5C76',
    borderRadius: 10,
    padding: windowWidth * 0.04, // Ajuste para padding responsivo
    marginTop: windowWidth * 0.02, // Ajuste para margem responsiva
  },
  addressText: {
    fontSize: windowWidth * 0.04, // Tamanho de fonte responsivo
    color: 'white',
  },
});

export default Agencias;