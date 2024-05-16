import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';
import CadastroUsuario from './CadastroUsuario';
import CadastroInstituicao from './CadastroInstituicao';

const Stack = createStackNavigator();

class NavCadastro extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
        <Stack.Screen name="Cadastro Usuário" component={CadastroUsuario}
          options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
        <Stack.Screen name="Cadastro Instituição" component={CadastroInstituicao} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
      </Stack.Navigator>
    );
  }
}

export default NavCadastro;