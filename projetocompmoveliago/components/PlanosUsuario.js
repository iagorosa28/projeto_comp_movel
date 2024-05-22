import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class PlanosUsuario extends React.Component{
  constructor(props){
    super(props);
    this.planoUsuario = undefined,
    this.cpfUsuario = props.route.params.cpfUsuario
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
          planoUsuario: this.planoUsuario
        })
        alert("PLANO CONTRATADO COM SUCESSO!")
      }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textinho}>{
          "Plano Mensal - 4 marmitas/semana - Total 16 marmitas - R$100,00/mês"
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToPlanoMensal()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <Text style={estilos.textinho}>{
          "Plano Semestral - 4 marmitas/semana - Total 96 marmitas - R$95,00/mês"
          // Desconto de 5%
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToPlanoSemestral()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <Text style={estilos.textinho}>{
          "Plano Anual - 4 marmitas/semana - Total 192 marmitas - R$90,00/mês"
          // Desconto de 10%
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToPlanoAnual()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  goToPlanoMensal = () => {
    this.planoUsuario = "Mensal";
    this.salvar();
  }
  goToPlanoSemestral = () => {
    this.planoUsuario = "Semestral";
    this.salvar();
  }
  goToPlanoAnual = () => {
    this.planoUsuario = "Anual";
    this.salvar();
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

  textinho: {
    color: "#003300",
    fontSize: 20,
    textAlign: "center"
  },

  buttonUsuario: {
    backgroundColor: "#ff9900",
    padding: 5,
    borderRadius: 5
  }

})

export default PlanosUsuario;