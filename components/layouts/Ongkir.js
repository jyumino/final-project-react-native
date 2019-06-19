import React, { Component } from 'react';
import axios from 'axios';
import ResultOngkir from './resultOngkir';
import { StyleSheet, Text, View, TextInput,Picker, Button, ScrollView} from 'react-native';
class OngkosKirim extends Component {
    state = {
      origin        : "",
      destination   : "",
      kurir         : "jne",
      weight        : 1000,
      asal          : 151, 
      tujuan        : 151,
      result        : ""
    }
    componentDidMount() {
      axios.post(
        'https://geisa.online/api/getCity', 
        {
          resi: 1
        }               
      ).then(res => {                 
          this.setState({
              origin: res.data.rajaongkir.results,
              destination: res.data.rajaongkir.results
            });            
      }); 
    }    
    _setOrigin = val => {
      this.setState({
        asal : val
      });
    }
    _setDestination = val => {
      this.setState({
        tujuan : val
      });
    }
    _setKurir = val => {
      this.setState({
        kurir : val
      });
    }    
    _submitFunction = () => {
      this.setState({
        notif: '',
        result: ''
      });
      if(this.state.weight === 0){
        this.setState({
          notif: "Berat harus diisi"
        });
      }else{                
          this.setState({
            notif: "Tunggu Sebentar",
            result: ''
          });
          axios.post(
              'https://geisa.online/api/getCost', 
              {
                asal: this.state.asal,
                tujuan: this.state.tujuan,
                berat: this.state.weight,
                kurir: this.state.kurir
              }               
          ).then(res => {                 
              this.setState({
                  result: res.data.rajaongkir,
                  notif: ""
                });            
          }); 
          }        
    }
    render(){
      
        return (
          <View style={styles.boxContent}>
            <Text style={styles.legendTitle}>
              Asal 
            </Text>
            <Picker
              selectedValue={this.state.asal}
              onValueChange={this._setOrigin}
              style={{height: 50, width: '100%',marginTop:10,marginBottom: 10,borderWidth: 1,borderColor:'#333'}}>
                {
                  this.state.origin.length != 0 ?             
                  this.state.origin.map(( item, key ) =>
                  (
                    <Picker.Item label={item.city_name} value={item.city_id} key={key}/>
                  ))
                  :
                  <Picker.Item label="Please Wait" value="0" key='1'></Picker.Item>
                }
            </Picker>          
            <Text style={styles.legendTitle}>
              Tujuan
            </Text>
            <Picker
              selectedValue={this.state.tujuan}
              onValueChange={this._setDestination}
              style={{height: 50, width: '100%',marginTop:10,marginBottom: 10,borderWidth: 1,borderColor:'#333'}}>
                {
                  this.state.destination.length != 0 ?             
                  this.state.destination.map(( item, key ) =>
                  (
                    <Picker.Item label={item.city_name} value={item.city_id} key={key}/>
                  ))
                  :
                  <Picker.Item label="Please Wait" value="0" key='1'></Picker.Item>
                }
            </Picker>          
            <Text style={styles.legendTitle}>
              Kurir
            </Text>
            <Picker 
              selectedValue={this.state.kurir}
              onValueChange={this._setKurir}
              style={{height: 50, width: '100%',marginTop:10,marginBottom: 10,borderWidth: 1,borderColor:'#333'}}>
              <Picker.Item label="jne" value="jne" />
              <Picker.Item label="tiki" value="tiki" />
              <Picker.Item label="pos" value="pos" />
            </Picker>          
            <Text style={styles.legendTitle}>
              Berat (gram)
            </Text>
            <TextInput  
              placeholder="Enter Your Mobile Number"  
              style={styles.inputStyle}  
              keyboardType={'numeric'} 
              value='1000'
              />             
            <Text style={styles.notif}>{this.state.notif}</Text>
            <View style={styles.buttonSubmit}>
              <Button 
                  title="Submit"
                  style={styles.buttonStyle}
                  onPress={this._submitFunction}                  
                />            
            </View> 
            <ScrollView vertical>
                {
                  this.state.result ? 
                  <ResultOngkir
                    result={this.state.result}
                  /> 
                  : 
                  <Text></Text>
                }
            </ScrollView>
           
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
  inputStyle: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    padding: 5,
    paddingLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%'
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
  legendTitle: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  notif: {
    color: 'red',
    fontSize: 12
  },

}); 
export default OngkosKirim;