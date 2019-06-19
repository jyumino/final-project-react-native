import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

class NavMenu extends Component {

    render(){
        return (
         <View style={styles.navMenu}>
            <Link to="/">
                <Text style={styles.navMenuText}>Cek Resi</Text>
            </Link>
            <Link to="/ongkir">
                <Text style={styles.navMenuText}>Cek Ongkir</Text>
            </Link>
            <Link to="/tentangkami">
                <Text style={styles.navMenuText}>Tentang Kami</Text>
            </Link>
          </View>
        );    
    }
}

const styles = StyleSheet.create({
    navMenu : {
        flexDirection: 'row',
        backgroundColor: '#333'
      },
      navMenuText: {
        color: '#FFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
      }    
}); 
export default NavMenu;