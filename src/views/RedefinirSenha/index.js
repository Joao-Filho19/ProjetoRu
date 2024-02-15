import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import style from '../../components/Estilo/globalStyle';
import BarraProgresso from '../../components/BarraProgresso';
import Botao from '../../components/Botao';

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
    <>
      <BarraProgresso progresso={1} />
      <View style={style.barraProgress}>
        <View style={style.campTex}>
          <Text style={style.texto}>
            Sua nova senha deve ser diferente da senha anterior que voce usou.
          </Text>
        </View>
      </View>
      <SafeAreaView style={style.container}>
        <Text style={style.label}>Nova Senha*</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={style.input2}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite sua nova senha"
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
              style={style.input2}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="********"
              secureTextEntry={true}
            />
          )}
        />
        {errors.confirm_password && (
          <Text style={style.labelError}>
            {errors.confirm_password?.message}
          </Text>
        )}

        <View style={style.botao}>
          <Botao page="Login" label="Redefinir Senha" />
        </View>
      </SafeAreaView>
    </>
  );
};
