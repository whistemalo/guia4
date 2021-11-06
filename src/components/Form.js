import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Form = ({ setNombre, setSalarioBase }) => {

    return(
        <View style = { styles.formContainer } >
            <TextInput
            style = { styles.input }
            placeholder = 'Ingrese su nombre'
            onChange = { e => setNombre(e.nativeEvent.text) }
            />
            <TextInput
            style = { styles.input }
            placeholder = 'Ingrese su salario base'
            keyboardType = 'numeric'
            onChange = { e => setSalarioBase(e.nativeEvent.text) }
            />
      </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
      display: 'flex',
    },
    input: {
      height: 40,
      width: '80%',
      backgroundColor: '#eee',
      marginHorizontal: '10%',
      marginVertical: '2.5%',
      padding: 5,
      fontSize: 18,
    },
  });
  

export default Form;