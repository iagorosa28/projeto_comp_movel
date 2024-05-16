import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CadastroInstituicao extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nomeInstituicao: undefined,
      cnpjInstituicao: undefined,
      senhaInstituicao: undefined
    }
  }

  async gravar(){
    try{
      await AsyncStorage.setItem(this.state.cnpjInstituicao, 
      JSON.stringify({nome: this.state.nomeInstituicao, senha: this.state.senhaInstituicao}));
      alert("Instituição Cadastrado!")
    }catch(erro){
      alert("Erro!")
    }
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"Instituição:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({nomeInstituicao: texto})}></TextInput>
        <Text style={estilos.textoInput}>{"CNPJ:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({cnpjInstituicao: texto})}></TextInput>
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({senhaInstituicao: texto})}></TextInput>
        <TouchableOpacity style={estilos.buttonInputCadastrar} onPress={()=>this.gravar()}>
        <Text style={estilos.textoBotao}>{"Cadastrar"}</Text>
        </TouchableOpacity>
      </View>
    )
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

  buttonInputCadastrar: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 5,
    position: "absolute",
    top: 285
  }

})

export default CadastroInstituicao;