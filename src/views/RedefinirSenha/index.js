import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import Botao_cadastro from '../../components/BotaoCadastro';
import style from '../../components/Estilo/globalStyle';

const progressBarLength = 150; // comprimento da barra
const progressBarThickness = 6; // espessura da barra
const progress = 1; // porcentagem de preenchimento Somente valores entre 0 e 1

// Calculo da largura com base no progresso
const progressBarWidth = progress * progressBarLength;

const schema = yup.object({
  email: yup.string().required('Informe o seu email'),
  password: yup.string().min(6, 'Senha invalida').required('Informe sua senha'),
  confirm_password: yup
    .string()
    .min(6, 'As senhas não condizem')
    .required('Informe sua senha'),
});

export default props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data) {
    console.log(data);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.subtitle}>
        Sua nova senha deve ser diferente da senha anterior que voce usou.
      </Text>
      <Text style={style.label}>Nova Senha*</Text>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={style.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu email"
          />
        )}
      />
      {errors.email && (
        <Text style={style.labelError}>{errors.email?.message}</Text>
      )}

      {errors.password && (
        <Text style={style.labelError}>{errors.password?.message}</Text>
      )}

      <Text style={style.label}>Confirmar Senha*</Text>
      <Controller
        control={control}
        name="confirm_password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={style.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="********"
            secureTextEntry={true}
          />
        )}
      />
      {errors.confirm_password && (
        <Text style={style.labelError}>{errors.confirm_password?.message}</Text>
      )}

      <Botao_cadastro
        style={style.button}
        {...props}
        avancar="Login"
        onPress={handleSubmit(handleSignIn)}
      />
    </SafeAreaView>
  );
};
