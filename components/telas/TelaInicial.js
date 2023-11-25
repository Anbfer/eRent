import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TelaInicial = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.telaInicial}>
          <Image
            style={styles.nissanLeafIcon}
            source={require("../icones/Nissan_Leaf.png")}/>
          <View>
            <View style={styles.card3Layout}>
              <View style={[styles.card3Child, styles.childPosition]} />
              <Text style={[styles.aERentMantm1, styles.aERentMantm1Typo]}>
                A E-Rent mantém uma frota diversificada de veículos elétricos de
                última geração, que inclui carros compactos, SUVs, sedãs e até
                mesmo veículos utilitários. Nossa frota é constantemente
                atualizada para oferecer aos clientes as opções mais avançadas
                em termos de tecnologia e desempenho.
              </Text>
              <Text style={[styles.frotaDeVeculos1, styles.aluguelFlexvelTypo]}>
                Frota de Veículos Elétricos Modernos:
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.card1Layout}>
              <View style={[styles.card1Child, styles.card1Layout]} />
              <Text
                style={[
                  styles.estamosEmpenhadosEm1,
                  styles.preosCompetitivosPosition,
                ]}>
                Estamos empenhados em tornar a mobilidade elétrica acessível a
                todos. Nossos preços de locação são competitivos e oferecemos
                uma variedade de pacotes e descontos para atender às
                necessidades e orçamentos individuais de nossos clientes.
              </Text>
              <Text
                style={[
                  styles.preosCompetitivos,
                  styles.preosCompetitivosPosition,
                ]}>
                Preços Competitivos
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.card2Layout}>
              <View style={[styles.card2Child, styles.card2Layout]} />
              <Text style={[styles.oferecemosOpesDe1, styles.aERentMantm1Typo]}>
                Oferecemos opções de aluguel flexíveis, que incluem aluguel por
                hora, por dia, por semana ou por mês. Isso permite que os
                clientes escolham a duração da locação que melhor atenda às suas
                necessidades
              </Text>
              <Text style={[styles.aluguelFlexvel, styles.aluguelFlexvelTypo]}>
                Aluguel Flexível
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.footerLayout}>
              <View style={[styles.footerChild, styles.footerLayout]} />
              <Text
                style={[
                  styles.atendimentoAoCliente1,
                  styles.termosDeServio1Typo,
                ]}>
                Atendimento ao Cliente
              </Text>
              <Text
                style={[styles.termosDeServio1, styles.termosDeServio1Typo]}>
                Termos de Serviço
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  aERentMantm1Typo: {
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    fontSize: 14,
    position: 'absolute',
  },
  aluguelFlexvelTypo: {
    height: 45,
    top: 19,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    fontSize: 20,
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    position: 'absolute',
  },
  card1Layout: {
    height: 169,
    width: 429,
  },
  preosCompetitivosPosition: {
    left: 31,
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    position: 'absolute',
  },
  card2Layout: {
    height: 200,
    width: 429,
  },
  footerLayout: {
    height: 30,
    width: 428,
  },
  termosDeServio1Typo: {
    height: 14,
    fontSize: 12,
    top: 6,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    position: 'absolute',
  },
  nissanLeafIcon: {
    height: 344,
    width: 429,
  },
  card3Child: {
    backgroundColor: '#669bbc',
    height: 260,
    width: 429,
  },
  aERentMantm1: {
    top: 100,
    width: 400,
    height: 82,
    left: 17,
  },
  frotaDeVeculos1: {
    width: 341,
    left: 17,
  },
  card3Layout: {
    height: 260,
    width: 429,
  },
  card1Child: {
    backgroundColor: '#003049',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  estamosEmpenhadosEm1: {
    top: 51,
    width: 373,
    left: 31,
    textAlign: 'left',
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    fontSize: 14,
  },
  preosCompetitivos: {
    top: 18,
    width: 337,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    fontSize: 20,
    left: 31,
  },
  card2Child: {
    marginLeft: -214.5,
    left: '50%',
    backgroundColor: '#780000',
    top: 0,
    position: 'absolute',
    height: 259,
  },
  oferecemosOpesDe1: {
    top: 60,
    left: 40,
    width: 350,
    height: 70,
  },
  aluguelFlexvel: {
    left: 55,
    width: 320,
  },
  footerChild: {
    backgroundColor: '#748cab',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  atendimentoAoCliente1: {
    left: 23,
    width: 123,
  },
  termosDeServio1: {
    left: 275,
    width: 98,
  },
  telaInicial: {
    backgroundColor: '#edf2f4',
    flex: 1,
    width: '100%',
  },
});
export default TelaInicial;
