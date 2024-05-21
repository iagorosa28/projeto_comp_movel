import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

class LoginInstituicao extends React.Component{
  constructor(props){
    super(props)
    this.cnpjInstituicao = undefined,
    this.senhaInstituicao = undefined
    this.state = {
      notebooks: []
    }
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"CNPJ:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cnpjInstituicao = texto}}></TextInput>
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaInstituicao = texto}}></TextInput>
        <TouchableOpacity style={estilos.buttonInputLogar} onPress={()=>this.buscar()}>
        <Text style={estilos.textoBotao}>{"Logar"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  buscar(){
    firebase.database().ref("notebooks").orderByChild("cnpjInstituicao").equalTo(this.cnpjInstituicao).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Instituição não encontrada!")
      }
      else{
        let dados = Object.values(data)
        let instituicao = dados[0];
        if(instituicao.senhaInstituicao == this.senhaInstituicao){
          alert("Logado!");
        }else{
          alert("Senha Incorreta!");
        }
      }
    })
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