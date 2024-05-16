import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginInstituicao extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cnpjInstituicaoLogin: undefined,
      senhaInstituicaoLogin: undefined
    }
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"CNPJ:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({cnpjInstituicaoLogin: texto})}></TextInput>
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({senhaInstituicaoLogin: texto})}></TextInput>
        <TouchableOpacity style={estilos.buttonInputLogar} onPress={()=>this.ler()}>
        <Text style={estilos.textoBotao}>{"Logar"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  async ler(){
    try{
      let instituicaoJSON = await AsyncStorage.getItem(this.state.cnpjInstituicaoLogin);
      if(instituicaoJSON != null){
        let instituicao = JSON.parse(instituicaoJSON);
        if(instituicao.senha == this.state.senhaInstituicaoLogin){
          alert("Logado!")
        }else{
          alert("Senha Incorreta!");
        }
      }else{
        alert("Instituição não foi encontrada!");
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

export default LoginInstituicao;