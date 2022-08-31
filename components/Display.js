import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class Display extends Component{
  render(){
    return(
    <View style={styles.display}>
      <Text style={styles.dispValue} numberOfLines={1}>0</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-end'
  },
  dispValue: {
    fontSize: 60,
    color: 'black'
  }
})

