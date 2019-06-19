import React, { Component } from 'react';
import { StyleSheet, Image,View} from 'react-native';
class LogoBar extends Component {

    render(){
        return (
            <View style={styles.topNav}>
                <Image source={require('./assets/images/icon.png')} style={styles.logoStyle} />
            </View>
        );    
    }
}

const styles = StyleSheet.create({
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
export default LogoBar;