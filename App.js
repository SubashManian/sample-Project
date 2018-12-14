/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {TextInput, StyleSheet, Text, View, Button,ToastAndroid} from 'react-native';
import second from './second';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
      password:this.props.password
    };
  }

  
  validate(){
    if(this.state.name.trim().length>0 && this.state.password.trim().length>0)
      ToastAndroid.show("Successfully submit",ToastAndroid.CENTER);
  }
  
  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.label}> Name: </Text>
          
          <TextInput style={styles.edttext}
          placeholder="Enter Your Name"
          maxLength={10}/>
          
          <Text style={styles.label} >Password:</Text>
      
          <TextInput style={styles.edttext}
          placeholder="Enter Your Password"
          maxLength={10}
          secureTextEntry={true}>
          
          <Button style={styles.Button}
          title="Submit" 
          onPress={this.validate()}/>

          <Text style={styles.signup} onPress={() => navigate('Signup')}>Signup Now! Press Here</Text>

      </View>
    );
  }
}

const app= createStackNavigator({
    Home: {screen: App},
    Signup: {screen: second}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  edttext: {
    fontSize: 20,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  Button: {
    fontSize: 25,
    width: 30,
    height: 15
  },
  signup: {
    color: 'green',
    fontSize:15,
    textAlign:'center',
    margin: 10
  }
});
