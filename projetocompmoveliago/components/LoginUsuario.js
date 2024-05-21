import * as React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class LoginUsuario extends React.Component{
  constructor(props){
    super(props)
    this.cpfUsuario = undefined,
    this.senhaUsuario = undefined
    this.state = {
      notebooks: []
    }
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoInput}>{"CPF:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.cpfUsuario = texto}}></TextInput>
        <Spacer size={5} />
        <Text style={estilos.textoInput}>{"Senha:"}</Text>
        <TextInput style={estilos.input} onChangeText={(texto)=>{this.senhaUsuario = texto}}></TextInput>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonInputLogar} onPress={()=>this.buscar()}>
        <Text style={estilos.textoBotao}>{"Logar"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  buscar(){
    firebase.database().ref("notebooks").orderByChild("cpfUsuario").equalTo(this.cpfUsuario).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Usuário não encontrado!")
      }
      else{
        let dados = Object.values(data)
        let usuario = dados[0];
        if(usuario.senhaUsuario == this.senhaUsuario){
          if(usuario.enderecoUsuario != "NYD" && usuario.cartaoUsuario != "NYD"){
            this.props.navigation.navigate("Nav Home");
          }else{
            this.props.navigation.navigate("Cadastro E/C Usuário", {cpfUsuario: this.cpfUsuario});
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

export default LoginUsuario;