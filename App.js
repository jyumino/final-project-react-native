import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Picker } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import CheckResiBox from './components/layouts/checkResiBox';
import OngkosKirim from './components/layouts/Ongkir';
import TentangKami from './components/layouts/tentangKami';
import NavMenu from './components/layouts/navMenu';
export default class App extends Component { 
    render(){
      const Resi = () => <CheckResiBox />;

      const Ongkir = () => <OngkosKirim />;
            
      return (
        
        <NativeRouter>
        <View style={styles.container}>
          <View style={styles.topNav}>
            <Image source={require('./assets/images/icon.png')} style={styles.logoStyle} />
          </View>
          <NavMenu 
          />
          <Route exact path="/" component={Resi} />
          <Route exact path="/ongkir" component={Ongkir} />
          <Route exact path="/tentangkami" component={TentangKami} />
        </View>
      </NativeRouter>        
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
    padding: 10
  },

});
