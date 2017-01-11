import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import _Style_ from './style'; //importamos el contenido del archivo style.js y lo asignamos a la variable _Style_
import _botones_ from './botones'; //importamos el componente que definira los botones



export default class AwesomeProject extends Component {
  render() {
    return (
      /*takes up the full width and height available by styling it with flex: 100 desde la variable _Style_ que contiene el codigo de estilo previamente importado*/
      <View style={ _Style_.principalView }>
        {/*Establecemos el tamaño de las vistas por medio de la variable _Style_*/}
        <View style={ _Style_.numerosView }></View> 
        <View style={ _Style_.teclasView }>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  };
_renderInputButtons() {
const botonesParaMostrar = [
    [1,   2,   3, '/'],
    [4,   5,   6, '*'],
    [7,   8,   9, '-'],
    ['.', 0 , '=','+']
  ];
    let todoTeclado = []; //La sentencia let declara una variable de alcance local, la cual, opcionalmente, puede ser inicializada con algún valor.

    for (var r = 0; r < botonesParaMostrar.length; r ++) { //recorremos cada fila del arreglo de botones
        let fila = botonesParaMostrar[r];

        let filaTeclado = [];
        for (var i = 0; i < fila.length; i ++) { //recorremos cada elemento de la fila
            let valorTecla = fila[i]; //obtenemos el valor de la tecla de la fila corriente
              filaTeclado.push( //generamos un arreglo lineal con un COMPONENTE por posicion del arreglo
                  <_botones_ valu_e={valorTecla} key={r + "-" + i} /> // A "key" is a special string attribute you need to include when creating lists of elements.
              );
        }

        todoTeclado.push(<View style={ _Style_.filaBotones} key={"row-" + r}>{ filaTeclado }</View>)
        //al final la variavle todoTeclado contiene en un arreglo lineal todas filas del teclado, a su vez
        //cada fila contiene un COMPONENTE como elemento minimo.
        //[ [0],[1],[2],['/'] ],[ [3],[4],[5],['*'] ...]
        //todoTeclado[ filaTeclado[], filaTeclado[] , filaTeclado[] , filaTeclado[] ]
    }

      return todoTeclado; //regresamos la variable que contiene todo el teclado para
                          //ser incrustada en la vista correspondiente.
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);