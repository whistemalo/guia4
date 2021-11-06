import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import Form from './src/components/Form';
import Informacion from './src/components/Informacion';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [salarioBase, setSalarioBase] = useState(0);
  const [salarioNeto, setSalarioNeto] = useState(0);
  const [error, setError] = useState('');

  const CalcularSalarioNeto = () => {
    if( nombre.trim() === '')
    {
      setError('Ingrese su nombre');
    }
    else if( salarioBase <= 0)
    {
      setError('Ingrese su salario base');
    }
    else
    {
      var nuevoSalario = salarioBase - ( ( salarioBase * 0.03 ) + ( salarioBase * 0.04 ) + ( salarioBase * 0.05 ) );
      setSalarioNeto( nuevoSalario );
      setError(null);
    }
  }

  return (
    <SafeAreaView style = {{ flex: 1 }}>
      <View style = { styles.container }>
        <Text style = { styles.title }>Calculadora de Salario</Text>
        <Form setNombre = { setNombre } setSalarioBase = { setSalarioBase }/>
      </View>
      <Informacion nombre = { nombre} salarioNeto = { salarioNeto } salarioBase = { salarioBase } error = { error } />
      <Button CalcularSalarioNeto = { CalcularSalarioNeto } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#083D77',
    height: 200,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
  },
});
