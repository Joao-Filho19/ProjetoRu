import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cadastro from '../views/Cadastro';
import RedefinirSenha from '../views/RedefinirSenha';
import style from '../views/Cadastro/style';
import Login from '../views/Login';
import RecuperarSenha from '../views/RecuperarSenha';
import Perfil from '../views/Perfil';
import CodRecuperacao from '../views/CodRecuperacao';
import VerificacaoEmail from '../views/VerificarEmail';
import Cardapio from '../views/Cardapio';
import UploadCarteira from '../views/UploadCarteira';
import Carteira from '../views/Carteira';
import {Image, TouchableOpacity} from 'react-native';
const Stack = createNativeStackNavigator();
import MenuPonto from '../components/MenuPonto';
import MenuCarteira from '../components/MenuCarteira';

export default props => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{
        headerShown: true,
        headerTitle: 'Cadastre-se',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen
      name="RedefinirSenha"
      component={RedefinirSenha}
      options={{
        headerShown: true,
        headerTitle: 'Criar nova senha',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      name="RecuperarSenha"
      component={RecuperarSenha}
      options={{
        headerShown: true,
        headerTitle: 'Recuperar Senha',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen
      name="Perfil"
      component={Perfil}
      options={{
        headerShown: true,
        headerTitle: 'Meu Perfil',
        headerTitleAlign: 'center',
        headerTitleStyle: style.titleCadastro2,
        headerRight: () => <MenuPonto />,
      }}
    />
    <Stack.Screen
      name="CodRecuperacao"
      component={CodRecuperacao}
      options={{
        headerShown: true,
        headerTitle: 'Código da Senha',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen
      name="VerificarEmail"
      component={VerificacaoEmail}
      options={{
        headerShown: true,
        headerTitle: 'Verifique seu email',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen
      name="UploadCarteira"
      component={UploadCarteira}
      options={{
        headerShown: true,
        headerTitle: 'Carteira do Estudante',
        headerTitleStyle: style.titleCadastro,
      }}
    />
    <Stack.Screen
      name="Carteira"
      component={Carteira}
      options={{
        headerShown: true,
        headerTitle: 'Carteira do Estudante',
        headerTitleStyle: style.titleCadastro,
        headerRight: () => <MenuCarteira />,
      }}
    />
    <Stack.Screen name="Cardapio" component={Cardapio} />
  </Stack.Navigator>
);
