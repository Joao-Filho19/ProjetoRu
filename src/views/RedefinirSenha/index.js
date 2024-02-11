import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView} from "react-native"
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import Botao_cadastro from "../../components/BotaoCadastro";
import style from "../../components/Estilo/Style";
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Frag from "./components/Frag";
// import Aleatorio from "./components/Aleatorio";
// import {Comp2, Comp3} from "./components/Multi"
// import MinMax from "./components/MinMax";
// import Primeiro from "./components/Primeiro";

const progressBarLength = 150; // comprimento da barra
  const progressBarThickness = 6; // espessura da barra
  const progress = 1; // porcentagem de preenchimento Somente valores entre 0 e 1

  // Calculo da largura com base no progresso
  const progressBarWidth = progress * progressBarLength;


const schema = yup.object({
    email: yup.string().required("Informe o seu email"),
    password: yup.string().min(6, "Senha invalida").required("Informe sua senha"),
    confirm_password: yup.string().min(6, "As senhas não condizem").required("Informe sua senha")

})

export default props => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })


    function handleSignIn(data){
        console.log(data);
    }

    return (
        <SafeAreaView style={style.container}> 
            <Text style={style.title}>Criar nova senha</Text>
            <Text style={style.subtitle}>Sua nova senha deve ser diferente da senha anterior que voce usou</Text>
            <Text style={style.label}>Nova Senha*</Text>
            <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value}})=>(
                <TextInput
                style={style.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu email"
                
                />
            )}
            />
            {errors.email && <Text style={style.labelError}>{errors.email?.message}</Text>}

            {errors.password && <Text style={style.labelError}>{errors.password?.message}</Text>}

            <Text style={style.label}>Confirmar Senha*</Text>
            <Controller
            control={control}
            name="confirm_password"
            render={({field: {onChange, onBlur, value}})=>(
                <TextInput
                style={style.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="****************"
                secureTextEntry={true}
                />
            )}
            />
            {errors.confirm_password && <Text style={style.labelError}>{errors.confirm_password?.message}</Text>}

            <Botao_cadastro style={style.button} {...props} avancar="RedefinirSenha" onPress={handleSubmit(handleSignIn)}>
                
            </Botao_cadastro>

        
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

    )
    
}