import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Picker } from 'react-native';
import CheckResiBox from './components/layouts/checkResiBox';
export default class App extends Component {
    render(){
      return (
        <View style={styles.container}>
          <View style={styles.topNav}>
            <Image source={require('./assets/images/icon.png')} style={styles.logoStyle} />
          </View>
          
          <CheckResiBox 
          />
        </View>
      );      
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    paddingTop: 30
  },
  topDiv: {
    backgroundColor: '#FFF',
    height: 50,
    width: '100%'
  },
  logoStyle: {
    width: 135,
    height:40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  topNav: {
    backgroundColor: '#FFF',
    height: 60,
    padding: 10,
    marginBottom: 20
  },

});
