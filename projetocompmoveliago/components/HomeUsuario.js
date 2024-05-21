import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class HomeUsuario extends React.Component{
  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{"Marmitas Mara"}</Text>
        <Text style={estilos.textinho}>{
          "Bem-vindo ao app da maior instituição de marmitas do Brasil! Comece já contratando um plano :)"
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToPlanosUsuario()}>
        <Text style={estilos.textoBotao}>{"Contratar Plano"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  goToPlanosUsuario(){
    alert("Planos...");
  }
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebf9eb",
    display: "flex",
    height: "100%"
  },
  
  titulo: {
    color: "#003300",
    fontSize: 30,
    textAlign: "center",
    position: "absolute",
    top: 28
  },

  textinho: {
    color: "#003300",
    fontSize: 20,
    textAlign: "center"
  },

  buttonUsuario: {
    backgroundColor: "#ff9900",
    padding: 5,
    borderRadius: 5
  }

})

export default HomeUsuario;