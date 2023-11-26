import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const ConfirmarAgendamentos = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('');
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  useEffect(() => {
    // Habilita o botão "Próximo" se uma data foi selecionada
    setNextButtonDisabled(selectedDate === '');
  }, [selectedDate]);


  const selecionarDia = (date) => {
    setSelectedDate(date.dateString);
  };

  const cancelar = () => {
    navigation.navigate('Carros Disponiveis');
  };

  const proximo = () => {
    navigation.navigate('Pagamento');
  };
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
      <Text style={styles.eRent}>
      Selecione a data para agendar
      </Text>
        <Calendar
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#FF5733',
            },
          }}
          onDayPress={selecionarDia}
          locale={'pt-br'}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonCancelar}
          onPress={cancelar}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonProximo, { opacity: nextButtonDisabled ? 0.5 : 1 }]}
          onPress={proximo}
          disabled={nextButtonDisabled}
        >
          <Text>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B264F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    borderRadius: 2,
    overflow: 'hidden',
    borderColor: '#fff',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.03,
  },
  buttonCancelar: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.05,
    backgroundColor: '#780000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 20
  },
    buttonProximo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.05,
    backgroundColor: '#3DB04A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 20
  },
    eRent: {
    flex:1,
    flexDirection: 'row',
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Baloo2-SemiBold',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ConfirmarAgendamentos;
