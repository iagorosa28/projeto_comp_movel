import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class CadastroInstituicao extends React.Component{
  constructor(props){
    super(props);
    this.nomeInstituicao = undefined,
    this.cnpjInstituicao = undefined,
    this.senhaInstituicao = undefined
  }

  salvar(){
    firebase.database().ref("notebooks").orderByChild("cnpjInstituicao").equalTo(this.cnpjInstituicao).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        firebase.database().ref('/notebooks').push({
          nomeInstituicao: this.nomeInstituicao,
          cnpjInstituicao: this.cnpjInstituicao,
          senhaInstituicao: this.senhaInstituicao
        })
        alert("Instituição Cadastrada!")
      }
      else{
        alert("CNPJ já cadastrado!")
      }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"Instituição:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.nomeInstituicao = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"CNPJ:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cnpjInstituicao = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaInstituicao = texto}}></TextInput>
        <Spacer size={10} />
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
    backgroundColor: "#ebf9eb",
    display: "flex",
    height: "100%"
  },

  textoBotao: {
    color: "#FFFFFF"
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
    color: "#003300",
    fontSize: 20,
  },

  buttonInputCadastrar: {
    backgroundColor: "#ff9900",
    padding: 10,
    borderRadius: 5
  }

})

export default CadastroInstituicao;