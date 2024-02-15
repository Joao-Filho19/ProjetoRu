import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {styles} from './style';
import Botao from '../../components/Botao';
import BarraProgresso from '../../components/BarraProgresso';
export default function CodRecuperacao() {
  return (
    <>
      <BarraProgresso progresso={0.6} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Nós enviamos um código de recuperação de senha de 4 dígitos para o seu
          e-mail. Digite o código para prosseguir.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputCod}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>

          <Text style={styles.resendCode}>
            Não recebeu o código? <Text style={{color: 'blue'}}>Reenviar</Text>
          </Text>
          <Botao page="RedefinirSenha" label="Validar" />
        </View>
      </View>
    </>
  );
}
