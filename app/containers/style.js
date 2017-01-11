import  { StyleSheet } from 'react-native'; //declaramos ésta hoja como de estilos

var Style_ = StyleSheet.create({
  principalView: {
    flex:1,
    flexDirection: 'column'
  },
  //establecemos por Flexbox el tamaño de las secciones a 25% y 75%*
  numerosView: {
    flex: 2.5,
    backgroundColor: 'skyblue'    
  },
  teclasView: {
    flex: 7.5, 
    backgroundColor: '#193441'
  },
  botonView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  botonTextoView:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  filaBotones: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style_; //habilitamos con export para que el codigo de todo este archivo pueda ser importado desde otro archivo