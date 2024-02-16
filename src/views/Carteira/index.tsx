import React from 'react';
import {Image, Text, View} from 'react-native';
import Style from './style';
import {useRoute} from '@react-navigation/native';

export default function Carteira() {
  const route = useRoute();
  const imageUri = route.params?.imageUri;

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
      {imageUri ? (
        <Image source={{uri: imageUri}} style={Style.bordaUpload} />
      ) : null}
    </View>
  );
}
