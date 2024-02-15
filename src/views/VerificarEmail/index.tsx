import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Botao from '../../components/Botao';

export default function VerificacaoEmail() {
  // Define o comprimento, o nível de preenchimento e a espessura da barra de progresso
  const progressBarLength = 150; // comprimento da barra
  const progressBarThickness = 6; // espessura da barra
  const progress = 1; // porcentagem de preenchimento Somente valores entre 0 e 1

  // Calculo da largura com base no progresso
  const progressBarWidth = progress * progressBarLength;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progressBarContainer,
          {width: progressBarLength, height: progressBarThickness},
        ]}>
        <View style={[styles.progressBar, {width: progressBarWidth}]} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Nós enviamos um código para o seu email: skdp*****9@uea.edu.br
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>

      <Text style={styles.resendCode}>
        Não recebeu o código? <Text style={{color: 'blue'}}>Reenviar</Text>
      </Text>

      <Botao page="Login" label="Entrar" />
    </View>
  );
}
