import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Button = ({ CalcularSalarioNeto}) => {
    return(
        <View style = { styles.containerButtom }>
            <TouchableOpacity style = { styles.button } onPress = { CalcularSalarioNeto } >
                <Text style = { styles.text }>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButtom: {
        position: 'absolute',
        bottom: 0,
        justifyContent: "center",
        width: '100%',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#083D77',
    },
    button: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
  });
  

export default Button;