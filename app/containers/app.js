import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import _Style_ from './style'; //importamos el contenido del archivo style.js y lo asignamos a la variable _Style_

export default class AwesomeProject extends Component {
  render() {
    return (
      /*takes up the full width and height available by styling it with flex: 100 desde la variable _Style_ que contiene el codigo de estilo previamente importado*/
      <View style={ _Style_.principalView }>
        {/*Establecemos el tamaño de las vistas por medio de la variable _Style_*/}
        <View style={ _Style_.numerosView }></View> 
        <View style={ _Style_.teclasView }></View>
      </View>
    );
  }jc
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);