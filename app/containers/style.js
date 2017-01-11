import  { StyleSheet } from 'react-native'; //declaramos ésta hoja como de estilos

var Style_ = StyleSheet.create({
  principalView: {
    flex:100,
    flexDirection: 'column'
  },
  //establecemos por Flexbox el tamaño de las secciones a 30% y 70%*
  numerosView: {
    flex: 30,
    backgroundColor: 'skyblue'    
  },
  teclasView: {
    flex: 70, 
    backgroundColor: '#193441'
  },
});

export default Style_; //habilitamos con export para que el codigo de todo este archivo pueda ser importado desde otro archivo