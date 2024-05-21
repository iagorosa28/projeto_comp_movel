import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class CadastroECUsuario extends React.Component{
  constructor(props){
    super(props);
    this.enderecoUsuario = undefined,
    this.cartaoUsuario = undefined,
    this.cpfUsuario = props.route.params.cpfUsuario // Recebe o cpfUsuario da navegação
  }

  salvar(){
    firebase.database().ref("notebooks").orderByChild("cpfUsuario").equalTo(this.cpfUsuario).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Erro! usuário não encontrado.")
      }
      else{
        let key = Object.keys(data)[0];
        firebase.database().ref(`/notebooks/${key}`).update({
          enderecoUsuario: this.enderecoUsuario,
          cartaoUsuario: this.cartaoUsuario
        })
        alert("Endereço e Cartão cadastrados com sucesso!");
        this.props.navigation.navigate("Nav Home");
      }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"Endereço Usuário:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.enderecoUsuario = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Cartão Usuário:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cartaoUsuario = texto}}></TextInput>
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

export default CadastroECUsuario;