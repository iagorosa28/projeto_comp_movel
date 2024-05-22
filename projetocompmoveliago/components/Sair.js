import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Sair extends React.Component{
render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textinho}>{
          "Deseja realmente sair?"
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToLogin()}>
        <Text style={estilos.textoBotao}>{"Sim, TCHAU!"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  goToLogin(){
    this.props.navigation.navigate("Login");
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

export default Sair;