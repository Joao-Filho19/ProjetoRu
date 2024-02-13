import React, {useState, useEffect} from 'react';
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
import style from '../../components/Estilo/globalStyle.js';
import Botao_cadastro from '../../components/BotaoCadastro/index.js';
import Style from './style.js';
import NetInfo from '@react-native-community/netinfo';
import {Image} from 'react-native';
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Frag from "./components/Frag";
// import Aleatorio from "./components/Aleatorio";
// import {Comp2, Comp3} from "./components/Multi"
// import MinMax from "./components/MinMax";
// import Primeiro from "./components/Primeiro";

const schema = yup.object({
  email: yup.string().required('Informe o seu email'),
  password: yup.string().min(6, 'Senha invalida').required('Informe sua senha'),
  confirm_password: yup
    .string()
    .min(6, 'As senhas não condizem')
    .required('Informe sua senha'),
});

export default props => {
  const progressBarLength = 150; // comprimento da barra
  const progressBarThickness = 6; // espessura da barra
  const progress = 0.7; // porcentagem de preenchimento (entre 0 e 1)

  // Calcula a largura da barra de progresso com base no progresso
  const progressBarWidth = progress * progressBarLength;

  const [connState, setConnState] = useState(0);
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

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnState(state);
      console.log('Tipo de conexão', state.type);
      console.log('Está conectado?', state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnState(state);
      console.log('Tipo de conexão', state.type);
      console.log('Está conectado?', state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={style.container}>
      {/* status da conexao */}
      <View style={style.container2}>
        <Text style={style.boldText}>Estado da Rede</Text>
        <Text style={{color: '#000'}}>Tipo de conexão: {connState.type}</Text>
        <Text style={{color: '#000'}}>
          Está conectado? {connState.isConnected == true ? 'Sim' : 'Não'}
        </Text>
      </View>

      {/* barra dde progresso */}
      <View
        style={[
          style.progressBarContainer,
          {width: progressBarLength, height: progressBarThickness},
        ]}>
        <View style={[style.progressBar, {width: progressBarWidth}]} />
      </View>

      {/* <View style={[style.progressBarContainer, { width: progressBarLength, height: 	progressBarThickness }]}/>
        <View style={[style.progressBar, { width: progressBarWidth }]}></View> */}
      {/* <Text style={Style.titleCadastro}>Cadastre-se</Text> */}
      <Text style={style.label}>E-mail*</Text>
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

      <Text style={style.label}>Senha*</Text>
      <View style={Style.inputContainer}>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={Style.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="***************"
            />
          )}
        />
        <Image
          source={require('../../assets/teste/lock.png')}
          style={Style.icon}
        />
      </View>
      {errors.password && (
        <Text style={style.labelError}>{errors.password?.message}</Text>
      )}

      <Text style={style.label}>Confirmar Senha*</Text>
      <View style={Style.inputContainer}>
        <Controller
          control={control}
          name="confirm_password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={Style.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="****************"
              secureTextEntry={true}
            />
          )}
        />
        <Image
          source={require('../../assets/teste/lock.png')}
          style={Style.icon}
        />
      </View>
      {errors.confirm_password && (
        <Text style={style.labelError}>{errors.confirm_password?.message}</Text>
      )}

      <Botao_cadastro
        style={style.button}
        {...props}
        avancar="RedefinirSenha"
        onPress={handleSubmit(handleSignIn)}
      />

      {/*
        <Pai/>
        <Contador inicial={100} />
        <Botao/>
        <Frag principal="Cadastro" secundario="Tela de cadastro" />
        <Aleatorio min={10} max={90}></Aleatorio>
        <MinMax min="3" max="20"/>
        <Comp2/>
        <Comp3/>
        <Primeiro/> */}
    </SafeAreaView>
  );
};
