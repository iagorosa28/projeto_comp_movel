import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Spacer = ({ size }) => {
  return <View style={{ height: size }} />;
};

class Destaque extends React.Component{
render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.textinho}>{
          "Marmita destaque do mês: marmita fitness de frango top com saldinha legal e arroz integral maneiro :)"
        }</Text>
        <Spacer size={10} />
        <Image style={estilos.image} source={require("../asset/marmita-fitness.jpg")}/>
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

  textinho: {
    color: "#003300",
    fontSize: 20,
    textAlign: "center"
  },
  
  image: {
    width: 150,
    height: 150,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 2
  }

})

export default Destaque;