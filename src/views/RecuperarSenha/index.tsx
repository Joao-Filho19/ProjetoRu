import React from 'react';
// import {Text, View} from 'react-native-animatable';
import {View, Text} from 'react-native';
import Botao from '../../components/Botao';
import Input from '../../components/CampInput';
import Style from './style';
// import * as Progress from 'react-native-progress';

export default function RecuperarSenha() {
  return (
    <View style={Style.container}>
      <View style={Style.campTex}>
        <Text style={Style.texto}>
          Digite o endereço de e-mail associado a sua conta e enviaremos um link
          para redefinir a sua senha.
        </Text>
      </View>
      <View style={Style.central}>
        <Text style={Style.label}>E-mail*</Text>
        <Input texto="Digite seu e-mal" />
        <View style={Style.botaoEnviar}>
          <Botao page="RedefinirSenha" label="Enviar" />
        </View>
      </View>
    </View>
  );
}
