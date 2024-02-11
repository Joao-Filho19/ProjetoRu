import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from '../views/Cadastro'
import RedefinirSenha from '../views/RedefinirSenha'
const Stack  = createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Cadastro"
    screenOptions={{headerShown:false}}>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha}/>
    </Stack.Navigator>
)