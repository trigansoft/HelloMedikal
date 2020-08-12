import React, { Component } from 'react';
import {View} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';


export default function MeterialTextInput(props){
    let {label, keyboardType,secureTextEntry} = props;
    
    const onSubmit = () => {
        
          
      };
     
//    const formatText = (text) => {
//         return text.replace(/[^+\d]/g, '');
//       };
    return (
        <View style={{flex:1}}>
            <OutlinedTextField
                leftIcon="email"
                label={label}
                keyboardType={keyboardType}
                onSubmitEditing={()=>{onSubmit()}}
                underlineColorAndroid="transparent"
                secureTextEntry={secureTextEntry}
            />
      </View>
    )
}