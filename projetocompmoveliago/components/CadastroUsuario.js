import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class CadastroUsuario extends React.Component{
  constructor(props){
    super(props);
    this.nomeUsuario = undefined,
    this.cpfUsuario = undefined,
    this.senhaUsuario = undefined,
    this.enderecoUsuario = undefined,
    this.cartaoUsuario = undefined,
    this.planoUsuario = undefined
  }

  salvar(){
    firebase.database().ref("notebooks").orderByChild("cpfUsuario").equalTo(this.cpfUsuario).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        firebase.database().ref('/notebooks').push({
          nomeUsuario: this.nomeUsuario,
          cpfUsuario: this.cpfUsuario,
          senhaUsuario: this.senhaUsuario,
          // NYD = "Not yet defined" ou "Ainda não definido"
          enderecoUsuario: "NYD",
          cartaoUsuario: "NYD",
          planoUsuario: "NYD"
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
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"CPF:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cpfUsuario = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaUsuario = texto}}></TextInput>
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

export default CadastroUsuario;