import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class CadastroECInstituicao extends React.Component{
  constructor(props){
    super(props);
    this.enderecoInstituicao = undefined,
    this.cartaoInstituicao = undefined,
    this.cnpjInstituicao = props.route.params.cnpjInstituicao // Recebe o cnpjInstituicao da navegação
  }

  salvar(){
    firebase.database().ref("notebooks").orderByChild("cnpjInstituicao").equalTo(this.cnpjInstituicao).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Erro! instituição não encontrada.")
      }
      else{
        let key = Object.keys(data)[0];
        firebase.database().ref(`/notebooks/${key}`).update({
          enderecoInstituicao: this.enderecoInstituicao,
          cartaoInstituicao: this.cartaoInstituicao
        })
        alert("Endereço e Cartão cadastrados com sucesso!");
      }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"Endereço Instituição:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.enderecoInstituicao = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Cartão Instituição:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cartaoInstituicao = texto}}></TextInput>
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

export default CadastroECInstituicao;