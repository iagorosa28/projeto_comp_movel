import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Cadastro extends React.Component{
  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{"Marmitas Mara"}</Text>
        <Text style={estilos.logarCadastrar}>{"Cadastrar:"}</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToCadastroUsuario()}>
        <Text style={estilos.textoBotao}>{"Cadastrar Usuário"}</Text>
        </TouchableOpacity>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonInstituicao} onPress={()=>this.goToCadastroInstituicao()}>
        <Text style={estilos.textoBotao}>{"Cadastrar Instituição"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  goToCadastroUsuario(){
    this.props.navigation.navigate("Cadastro Usuário");
  }
  goToCadastroInstituicao(){
    this.props.navigation.navigate("Cadastro Instituição");
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

  logarCadastrar: {
    color: "#003300",
    fontSize: 20,
    textAlign: "center"
  },

  buttonUsuario: {
    backgroundColor: "#ff9900",
    padding: 5,
    borderRadius: 5
  },

  buttonInstituicao: {
    backgroundColor: "#ff9900",
    padding: 5,
    borderRadius: 5
  },

  textoBotao: {
    color: "#FFFFFF"
  }

})

export default Cadastro;