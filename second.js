import React ,{Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button,ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class second extends Component{
    constructor(props){
        super(props);
        this.state = {
          name:'',
          password:'',
          email:'',
          confirmpwd:'',
        };
    }

    validate(){
        if(this.state.name.trim().length===0  &&
        this.state.password.trim().length===0 &&
        this.state.email.trim().length===0 &&
        this.state.confirmpwd.trim().length===0){
            ToastAndroid.show("Enter the Text Field",ToastAndroid.CENTER);
        }

        if(this.state.password.trim() == this.state.confirmpwd.trim()){
            this.props.navigator(App);
            Actions.App({name:this.state.name,
                        password:this.state.password});
        }
    }

    render(){
        return(
            <View Style={Style.container}>

                <Text Style={Style.Text}>Name:</Text>

                <TextInput Style={Style.edttext}
                placeholder="Enter Your Name"
                maxLength={10}
                onChangeText={(name)=> this.setState({name})}></TextInput>

                <Text Style={Style.Text}>Email:</Text>
                
                <TextInput Style={Style.edttext}
                placeholder="Enter Your Email"
                maxLength={30}
                onChangeText={(email)=> this.setState({email})}></TextInput>

                <Text Style={Style.Text}>Password:</Text>

                <TextInput Style={Style.edttext}
                placeholder="Enter Your Password"
                maxLength={10}
                secureTextEntry={ture}
                onChangeText={(password)=> this.setState({password})}></TextInput>

                <Text Style={Style.Text}>Confirm Password:</Text>

                <TextInput Style={Style.edttext}
                placeholder="Enter Your Password Again"
                maxLength={10}
                secureTextEntry={true}
                onChangeText={(confirmpwd)=> this.setState({confirmpwd})}></TextInput>

                <Button Text="Submit" onPress={this.validate()}></Button>

            </View>
        );
    }

    
}