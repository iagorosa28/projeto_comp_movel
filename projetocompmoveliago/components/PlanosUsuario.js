import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class PlanosUsuario extends React.Component{
  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textinho}>{
          "Entrega Mensal - 20 marmitas - R$100,00/mês ou R$1.080,00/ano"
          // Desconto de 10% para anual
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToContratarUsuario()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <Text style={estilos.textinho}>{
          "Entrega Mensal - 12 marmitas - R$80,00/mês ou R$892,00/ano"
          // Desconto de 7% para anual
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToContratarUsuario()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <Text style={estilos.textinho}>{
          "Entrega Mensal - 8 marmitas - R$60,00/mês ou R$684,00/ano"
          // Desconto de 5% para anual
        }</Text>
        <Spacer size={10} />
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>this.goToContratarUsuario()}>
        <Text style={estilos.textoBotao}>{"Contratar"}</Text>
        </TouchableOpacity>
        <Spacer size={20} />
      </View>
    )
  }

  goToContratarUsuario(){
    alert("PLANO CONTRATADO!");
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