import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Informacion = ({ nombre, salarioNeto, salarioBase, error }) => {

    return(
        <View style = { styles.containerInfo }>
            <Text style = { styles.title }>Informacion</Text>
            <InfoDetalle info = 'Nombre' data={ nombre} />
            <InfoDetalle info = 'Salario Base' data={ `$${salarioBase}` } />
            <InfoDetalle info = 'ISSS' data = '3%' />
            <InfoDetalle info = 'AFP' data = '4%' />
            <InfoDetalle info = 'RENTA' data = '5%' />
            <InfoDetalle info = 'Salario Neto' data={ `$${salarioNeto}` } />
            <Text style = { styles.error }>{ error }</Text>
        </View>
    )
}

const InfoDetalle = ( {info, data} ) => {
    return(
        <View style = { styles.info }>
            <Text style = { styles.text }>{ info }: </Text>
            <Text style = { styles.text }>{ data }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    containerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
      },
      title:{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 5,
      },
      text: {
          fontSize: 20,
          marginTop: 10,
      },
      error:{
        marginTop: 10,
        color: 'red',
        fontSize: 20,
      }
  });
  

export default Informacion;