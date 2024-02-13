import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Style from './style';
import {useNavigation} from '@react-navigation/native';

export default function Botao(props) {
  const navigation = useNavigation();
  const {page, label} = props;

  const handlePress = () => {
    navigation.navigate(page); // Navega para a página especificada ao ser pressionado
  };

  return (
    <TouchableOpacity style={Style.botao} onPress={handlePress}>
      <Text style={Style.textBotao}>{label}</Text>
    </TouchableOpacity>
  );
}
