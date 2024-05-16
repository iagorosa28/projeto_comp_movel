import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import LoginUsuario from './LoginUsuario';
import LoginInstituicao from './LoginInstituicao';

const Stack = createStackNavigator();

class NavLogin extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
        <Stack.Screen name="Login Usuário" component={LoginUsuario} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
        <Stack.Screen name="Login Instituição" component={LoginInstituicao}
          options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
      </Stack.Navigator>
    );
  }
}

export default NavLogin;