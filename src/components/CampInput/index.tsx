import React from 'react';
import {TextInput} from 'react-native';
import Style from './style';

export default function Input(props) {
  const {texto} = props; // Extrai as props page e label

  return (
    <TextInput
      placeholder={texto}
      autoCorrect={false}
      onChangeText={() => {}}
      style={Style.input}
      placeholderTextColor="#827F7F"
    />
  );
}
