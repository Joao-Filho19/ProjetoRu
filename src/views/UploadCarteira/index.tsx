import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import Style from './style';
import {useNavigation} from '@react-navigation/native';
import * as image from 'react-native-image-picker';

export default function UploadCarteira() {
  const navigation = useNavigation();
  const [imageSource, setImageSource] = useState(null);

  const handlePress = () => {
    const options = {
      title: 'Selecione uma imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    image.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção da imagem');
      } else if (response.error) {
        console.log('Erro ao selecionar a imagem:', response.error);
      } else {
        const source = {uri: response.uri};
        setImageSource(source);

        console.log(response?.assets);

        navigation.navigate('Carteira', {imageUri: response.assets[0].uri!});
      }
    });
  };

  return (
    <>
      <View style={Style.containerTex}>
        <Text style={Style.textAlert}>Nenhuma carteira cadastrada!</Text>
      </View>

      <View style={Style.container}>
        <View style={Style.bordaUpload}>
          <Image source={require('../../assets/uploadarqu.png')} />
          {imageSource && <Image source={imageSource} style={Style.imgIcon} />}
          <TouchableOpacity style={Style.botaoP} onPress={handlePress}>
            <Text style={Style.textBotaoP}>Fazer Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
