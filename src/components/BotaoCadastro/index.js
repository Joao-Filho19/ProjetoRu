import React  from 'react'
import { Button, TouchableOpacity, View, Text } from 'react-native'
import style from '../Estilo/Style'
import { StyleSheet } from 'react-native'
export default props => (
    <View style={{flex:1}}>
        <View>
            {props.avancar
                ? <TouchableOpacity 
                        title='Avancar'
                        style={style.button}
                        onPress={()=>{
                            props.navigation.navigate(props.avancar)
                            
                        }}
                
                    ><Text style={style.buttonText}>Cadastrar</Text></TouchableOpacity>


                : false
            }
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
)