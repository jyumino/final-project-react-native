import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
class ResultOngkir extends Component {
    constructor(props){
        super(props);
        state = {
            data : this.props.result
        } 
    }
    render(){        
        return (
            <View>
            {
                this.props.result.status.code === 400 ?
                <Text>{this.props.result.status.description}</Text>
                :
                <View style = { styles.container }>
                {
                  this.props.result.results[0].costs.map(( item, key ) =>
                  (
                    <View key={key} style={styles.listView}>
                        <Text style={styles.textSmall}>{item.description}</Text>
                        <Text style={styles.text}>{item.service} - {item.description}</Text>
                        <Text style={styles.text}>Rp. {item.cost[0].value} - Estimasi : {item.cost[0].etd}</Text>
                        <View style={styles.separator}/> 
                    </View>
                  ))
                }
                </View>
            }
            </View>
        );            
    }
}

const styles = StyleSheet.create({
    container:
    {

    },    
    listView: {
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#707080',
        width: '100%',
    },
    textSmall:  {
        fontSize:12,
        color: '#606070',
        paddingBottom: 5
    },
    text: {
    fontSize: 16,
    color: '#606070',
    paddingBottom:10
    },   
    boxTitle: {
        padding: 5,
        backgroundColor:'#333',
        margin:5
    },
    textTitle: {
        fontSize: 16,
        color:'#FFF'
    } 
}); 
export default ResultOngkir;