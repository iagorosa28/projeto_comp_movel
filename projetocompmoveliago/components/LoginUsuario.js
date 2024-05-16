import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginUsuario extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cpfUsuarioLogin: undefined,
      senhaUsuarioLogin: undefined
    }
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"CPF:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({cpfUsuarioLogin: texto})}></TextInput>
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({senhaUsuarioLogin: texto})}></TextInput>
        <TouchableOpacity style={estilos.buttonInputLogar} onPress={()=>this.ler()}>
        <Text style={estilos.textoBotao}>{"Logar"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  async ler(){
    try{
      let usuarioJSON = await AsyncStorage.getItem(this.state.cpfUsuarioLogin);
      if(usuarioJSON != null){
        let usuario = JSON.parse(usuarioJSON);
        if(usuario.senha == this.state.senhaUsuarioLogin){
          alert("Logado!")
        }else{
          alert("Senha Incorreta!");
        }
      }else{
        alert("Usuário não foi encontrado!");
      }
    }catch(erro){
      console.log(erro);
    }
  }
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebf9eb"
  },

  textoBotao: {
    color: '#FFFFFF'
  },

  input: {
    color: "#000000",
    borderWidth: 2,
    borderColor: "#003300",
    fontSize: 20,
    width:"50%",
    textAlign: "center"
  },

  textoInput: {
    color: '#003300',
    fontSize: 20,
  },

  buttonInputLogar: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 5,
    position: "absolute",
    top: 255
  }

})

export default LoginUsuario;