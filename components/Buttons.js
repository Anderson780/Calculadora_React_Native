import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default props =>{
  const stylesBttn = [styles.bttn]
  if(props.operat){
    stylesBttn.push(styles.opeBttn)
  }
  if(props.equal){
    stylesBttn.push(styles.equalBttn)
  }

  return(
    <TouchableHighlight>
      <Text style={stylesBttn}>{props.label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  bttn: {
    fontSize: 18,
    width: Dimensions.get('window').width/4,
    height: Dimensions.get('window').width/4,
    padding: 22,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',   
  },
  opeBttn: {
    backgroundColor: 'rgb(224, 224, 224)',
    color: 'orange'
  },
  equalBttn: {
    backgroundColor: 'orange',
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
})

