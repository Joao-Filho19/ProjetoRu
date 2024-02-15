import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Style from './style';
import Botao from '../../components/Botao';
import Input from '../../components/CampInput';
import LinkButton from '../../components/Link';
// import * as animacao from 'react-native-animatable';

export default function Login() {
  const [isSelected, setSelection] = useState(false);

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };
  return (
    <KeyboardAvoidingView style={Style.container}>
      <View style={Style.containImg}>
        {/* <animacao.Image
          source={require('../../assets/logoUea.png')}
          style={Style.imgLogo}
          animation="flipInY"
        /> */}
        <Image
          source={require('../../assets/logoUea.png')}
          style={Style.imgLogo}
        />
        <Text style={Style.textSz}>Login RU</Text>
      </View>

      <View>
        <Text style={Style.label}>E-mail*</Text>
        <Input texto="Digite seu e-mail" />

        <Text style={Style.label}>Senha*</Text>
        <Input texto="********" />

        <View style={Style.textSeparado}>
          <View style={Style.textJunto}>
            <TouchableOpacity
              style={[Style.checkbox, isSelected && Style.checkboxSelected]}
              onPress={toggleCheckbox}
            />
            <Text style={Style.fontMin}> Lembre-se de mim</Text>
          </View>
          <LinkButton screenName="RecuperarSenha" label="Esqueceu a senha?" />
        </View>

        <View>
          <Botao page="UploadCarteira" label="Entrar" />

          <View style={Style.textJunto}>
            <Text style={Style.fontNormal}>Não tem uma conta? </Text>
            <LinkButton screenName="Cadastro" label="Cadastrer-se" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
