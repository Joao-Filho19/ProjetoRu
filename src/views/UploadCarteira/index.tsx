import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Style from './style';
import BotaoPequeno from '../../components/BotaoPequeno';

export default function UploadCarteira() {
  return (
    <>
      <View style={Style.containerTex}>
        <Text style={Style.textAlert}>Nenhuma carteira cadastrada!</Text>
      </View>

      <View style={Style.container}>
        <View style={Style.bordaUpload}>
          <Image
            source={require('../../assets/upload.png')}
            style={Style.imgIcon}
          />
          <BotaoPequeno
            page="Carteira"
            label="Fazer Upload"
            style={Style.botao}
          />
        </View>
      </View>
    </>
  );
}
