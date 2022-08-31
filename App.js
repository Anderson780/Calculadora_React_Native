import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import Buttons from './components/Buttons'
import Display from './components/Display'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Calculadora</Text>
        <Display />
        <View style={styles.bttn}>
          <Buttons label='C' />
          <Buttons label='+/-' />
          <Buttons label='%' />
          <Buttons label='DEL' />
          <Buttons label='7' />
          <Buttons label='8' />
          <Buttons label='9' />
          <Buttons label='/' operat />
          <Buttons label='4' />
          <Buttons label='5' />
          <Buttons label='6' />
          <Buttons label='X' operat />
          <Buttons label='1' />
          <Buttons label='2' />
          <Buttons label='3' />
          <Buttons label='-' operat />
          <Buttons label='0' />
          <Buttons label='.' />
          <Buttons label='=' equal />
          <Buttons label='+' operat />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  bttn: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 40,
    marginLeft: 5,
    color: 'orange',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0'
  }
});
