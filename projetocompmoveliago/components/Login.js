import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends React.Component{
  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{"Marmitas Mara"}</Text>
        <Text style={estilos.logarCadastrar}>{"Logar:"}</Text>
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToLoginUsuario()}>
        <Text style={estilos.textoBotao}>{"Logar Usuário"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.buttonInstituicao} onPress={()=>this.goToLoginInstituicao()}>
        <Text style={estilos.textoBotao}>{"Logar Instituição"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  goToLoginUsuario(){
    this.props.navigation.navigate("Login Usuário");
  }
  goToLoginInstituicao(){
    this.props.navigation.navigate("Login Instituição");
  }
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebf9eb"
  },
  
  titulo: {
    color: '#003300',
    fontSize: 30,
    textAlign: "center",
    position: "absolute",
    top: 30
  },

  logarCadastrar: {
    color: '#003300',
    fontSize: 20,
    textAlign: "center",
    position: "absolute",
    top: 220
  },

  buttonUsuario: {
    backgroundColor: '#ff9900',
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    top: 270
  },

  buttonInstituicao: {
    backgroundColor: '#ff9900',
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    top: 310
  },

  textoBotao: {
    color: '#FFFFFF'
  }

})

export default Login;