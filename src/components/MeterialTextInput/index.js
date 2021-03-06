import React, { Component } from 'react';
import { View } from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';


export default function MeterialTextInput(props) {
  let { label, keyboardType, secureTextEntry, renderLeftAccessory, renderRightAccessory } = props;

  const onSubmit = () => {


  };

  //    const formatText = (text) => {
  //         return text.replace(/[^+\d]/g, '');
  //       };
  return (
    <View style={{ marginTop: 10 }}>
      <OutlinedTextField
        leftIcon="email"
        label={label}
        keyboardType={keyboardType}
        onSubmitEditing={() => { onSubmit() }}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        renderLeftAccessory={renderLeftAccessory}
        renderRightAccessory={renderRightAccessory}
      />
    </View>
  )
}