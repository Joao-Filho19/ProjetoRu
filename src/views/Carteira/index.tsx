import React from 'react';
import {Image, Text, View} from 'react-native';
import Style from './style';

export default function Carteira() {
  return (
    <View style={Style.container}>
      <View style={Style.containerTitulo}>
        <Image
          source={require('../../assets/logoUea.png')}
          style={Style.imgLogo}
        />
        <View style={Style.containerTex}>
          <Text style={Style.textoNormal}>
            Universidade do Estado do Amazonas
          </Text>
          <Text style={Style.textoNormal}>Carteira do Estudante 2024</Text>
        </View>
      </View>
      <View style={Style.bordaUpload} />
    </View>
  );
}
