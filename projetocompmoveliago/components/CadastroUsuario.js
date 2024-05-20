import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

class CadastroUsuario extends React.Component{
  constructor(props){
    super(props);
    this.nomeUsuario = undefined,
    this.cpfUsuario = undefined,
    this.senhaUsuario = undefined
  }

  salvar(){
    firebase.database().ref("notebooks").orderByChild("cpfUsuario").equalTo(this.cpfUsuario).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        firebase.database().ref('/notebooks').push({
          nomeUsuario: this.nomeUsuario,
          cpfUsuario: this.cpfUsuario,
          senhaUsuario: this.senhaUsuario
        })
        alert("Usuário Cadastrado!")
      }
      else{
        alert("CPF já cadastrado!")
      }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"Nome:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.nomeUsuario = texto}}></TextInput>
        <Text style={estilos.textoInput}>{"CPF:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cpfUsuario = texto}}></TextInput>
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaUsuario = texto}}></TextInput>
        <TouchableOpacity style={estilos.buttonInputCadastrar} onPress={()=>this.salvar()}>
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

export default CadastroUsuario;