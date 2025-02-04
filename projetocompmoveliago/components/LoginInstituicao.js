import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

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
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaInstituicao = texto}}></TextInput>
        <Spacer size={10} />
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
          if(instituicao.enderecoInstituicao != "NYD" && instituicao.cartaoInstituicao != "NYD"){
            alert("OK");
          }else{
            this.props.navigation.navigate("Cadastro E/C Instituição", {cnpjInstituicao: this.cnpjInstituicao});
          }
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

  buttonInputLogar: {
    backgroundColor: "#ff9900",
    padding: 10,
    borderRadius: 5
  }

})

export default LoginInstituicao;