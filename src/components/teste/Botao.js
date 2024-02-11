import React from "react";
import { Button, Text } from "react-native";

export default props => {
    function executar(){
        console.warn('Exec!')
    }
    return (
        <Button
        title = "Executar"
        onPress={executar}
        />
    )
}