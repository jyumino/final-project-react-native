import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
class ResultResi extends Component {
    constructor(props){
        super(props);
        state = {
            status : JSON.parse(this.props.result)
        } 
    }
    render(){        
        return (
            <View>
            {
                this.props.status === 400 ?
                <Text>{this.props.description}</Text>
                :
                <View style = { styles.container }>
                    <View style={styles.boxTitle}>
                        <Text style={styles.textTitle}>Status Pengiriman : {this.props.summaryPengiriman.status}</Text>
                        <Text style={styles.textTitle}>Penerima : {this.props.summaryPengiriman.receiver_name}</Text>
                    </View>
                {
                  this.props.posisi.map(( item, key ) =>
                  (
                    <View key={key} style={styles.listView}>
                        <Text style={styles.textSmall}>{item.manifest_date} {item.manifest_time}</Text>
                        <Text style={styles.text}>{item.manifest_description}</Text>
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
export default ResultResi;