import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cadastro from '../views/Cadastro';
import RedefinirSenha from '../views/RedefinirSenha';
import style from '../views/Cadastro/style';
import Login from '../views/Login';
import RecuperarSenha from '../views/RecuperarSenha';
// import ListaCont from '../views/ListaContatos'
// import Screens from '../views/Screens'
const Stack = createNativeStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
      // headerTitle: 'Cadastre-se',
      // headerTitleStyle: style.titleCadastro,
    }}>

    <Stack.Screen name="Cadastro" component={Cadastro}
      options={{
      headerShown: true,
      headerTitle: 'Cadastre-se',
      headerTitleStyle: style.titleCadastro,
    }}/>
    <Stack.Screen name="RedefinirSenha" component={RedefinirSenha}
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

  </Stack.Navigator>
);
