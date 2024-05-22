import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeUsuario from './HomeUsuario';
import PlanosUsuario from './PlanosUsuario';

const Drawer = createDrawerNavigator();

class NavHomeUsuario extends React.Component {
  render() {
    return (
      <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#7ece7e'}, drawerActiveTintColor: '#000000', drawerInactiveTintColor: '#000000'
      }}>
        <Drawer.Screen name="Home Usuário" component={HomeUsuario} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
        <Drawer.Screen name="Planos Usuário" component={PlanosUsuario} initialParams={{cpfUsuario: this.props.route.params.cpfUsuario}} options={{headerStyle: {backgroundColor: '#7ece7e'}}}/>
      </Drawer.Navigator>
    );
  }
}

export default NavHomeUsuario;