import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cadastro from '../views/Cadastro';
import RedefinirSenha from '../views/RedefinirSenha';
import style from '../views/Cadastro/style';
// import ListaCont from '../views/ListaContatos'
// import Screens from '../views/Screens'
const Stack = createNativeStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="Cadastro"
    screenOptions={{
      headerShown: true,
      headerTitle: 'Cadastre-se',
      headerTitleStyle: style.titleCadastro,
    }}>

    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
  </Stack.Navigator>
);
