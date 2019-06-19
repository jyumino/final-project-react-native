import React, { Component } from 'react';
import { StyleSheet, Text,View, Image} from 'react-native';
class TentangKami extends Component {
    render(){
        return (
            <View style={styles.boxContent}>
                <Text>Application Creator           : Jumin Tantrikarta</Text>
                <Text>Application Name              : Geisa Tracking Airbill</Text>
                <Text>Application Version           : Beta 0.0.1</Text>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: '#FFF',
        padding: 20,
        flex:1
      },
    boxImages: {
        marginTop:20,
        marginBottom:20,
        textAlign: 'center',
        width: '100%'
    },
    logoStyle: {
        width: 135,
        height:40,
        marginLeft: 'auto',
        marginRight: 'auto'
      },    
}); 
export default TentangKami;