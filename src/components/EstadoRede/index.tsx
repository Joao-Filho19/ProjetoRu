import React from 'react';
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
import NetInfo from '@react-native-community/netinfo';
export default function EstadoRede() {
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
    <View>
      <Text>Estado da Rede</Text>
      <Text>Tipo de conexão: {connState.type}</Text>
      <Text>
        Está conectado? {connState.isConnected == true ? 'Sim' : 'Não'}
      </Text>
    </View>
  );
}
