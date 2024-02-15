import React from 'react';
// import {Text, View} from 'react-native-animatable';
import {View, Text} from 'react-native';
import Botao from '../../components/Botao';
import Input from '../../components/CampInput';
import Style from './style';
import BarraProgresso from '../../components/BarraProgresso';

export default function RecuperarSenha() {
  return (
    <>
      <BarraProgresso progresso={0.3} />
      <View style={Style.barraProgress}>
        <View style={Style.campTex}>
          <Text style={Style.texto}>
            Digite o endereço de e-mail associado a sua conta e enviaremos um
            link para redefinir a sua senha.
          </Text>
        </View>
      </View>
      <View style={Style.container}>
        <View style={Style.central}>
          <Text style={Style.label}>E-mail*</Text>
          <Input texto="Digite seu e-mal" />
          <View style={Style.botaoEnviar}>
            <Botao page="CodRecuperacao" label="Enviar" />
          </View>
        </View>
      </View>
    </>
  );
}
