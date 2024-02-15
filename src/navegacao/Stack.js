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
// import ListaCont from '../views/ListaContatos'
// import Screens from '../views/Screens'
const Stack = createNativeStackNavigator();

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
    <Stack.Screen name="Perfil" component={Perfil} />
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
    <Stack.Screen name="Cardapio" component={Cardapio} />
  </Stack.Navigator>
);
