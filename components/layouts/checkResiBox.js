import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Picker } from 'react-native';
import axios from 'axios';
class CheckResiBox extends Component {
      state = {
        resi : "",
        kurir: "jne",
        notifResi: "",
        result: ""
      }
      _submitFunction = () => { 
        if(this.state.resi.trim() === ""){
          this.setState({
            notifResi: "Nomor Resi Tidak Boleh Kosong"
          });
        }else{                
            axios.post(
                'https://geisa.online/api/testhit', 
                {
                  resi: this.state.resi,
                  kurir: this.state.kurir
                }               
            ).then(res => {                 
                this.setState({
                    notifResi: "Tunggu Sebentar",
                    result: JSON.stringify(res.data)
                  });            
            }); 
            }  
      };
      _setResi = val => {
        this.setState({
          resi : val
        });
      }
      _setKurir = val => {
        this.setState({
          kurir : val
        });
      }    
    render(){
        return (
            <View style={styles.boxContent}>
            <Text style={styles.legendTitle}>
              Pilih Kurir Ekspedisi
            </Text>
            <Text>
                {this.state.result}
            </Text>
            <Picker
              selectedValue={this.state.kurir}
              onValueChange={this._setKurir}
              style={{height: 50, width: '100%',marginTop:10,marginBottom: 10,borderWidth: 1,borderColor:'#333'}}>
              <Picker.Item label="jne" value="JNE" />
              <Picker.Item label="tiki" value="TIKI" />
              <Picker.Item label="pos" value="POS" />
            </Picker>          
            <Text style={styles.legendTitle}>
              Masukkan Nomor Resi
            </Text>
  
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputStyle}
                placeholder="Nomor Resi"
                onChangeText={this._setResi}
                value={this.state.resi}
              />
              <Button 
                title="Scan"
                style={styles.buttonStyle}
              />
            </View>
            <Text style={styles.notif}>{this.state.notifResi}</Text>
            <View style={styles.buttonSubmit}>
              <Button 
                  title="Submit"
                  style={styles.buttonStyle}
                  onPress={this._submitFunction}
                />            
            </View> 
          </View>
        );    
    }
}

const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: '#FFF',
        padding: 20
      },
      textWhite: {
        color:'#FFF',
        fontSize: 16
      },
      legendTitle: {
        fontSize: 16,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
      },
      inputStyle: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        padding: 5,
        paddingLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '70%'
      },
      buttonStyle: {
        padding: 10,
        width: '30%'
      },
      inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding:10,
        paddingLeft:0,
        paddingRight:0,
        alignItems: 'center'
      },
      notif: {
        color: 'red',
        fontSize: 12
      },
      buttonSubmit: {
        marginTop: 10,
        marginBottom: 10
      }
}); 
export default CheckResiBox;