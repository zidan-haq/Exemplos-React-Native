import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './componente/Simples';
import ParImpar from './componente/ParImpar';
import { Inverter, MegaSena } from './componente/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="flexível!" />
        <ParImpar numero={34} />
        <Inverter texto='React Native!' />
        <MegaSena />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});