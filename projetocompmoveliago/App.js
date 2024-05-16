import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import NavLogin from './components/NavLogin';
import NavCadastro from './components/NavCadastro';

const Tab = createBottomTabNavigator();

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={NavLogin} options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home-account" color={color} size={size}/>)
            , headerShown: false}}
          />
          <Tab.Screen name="Cadastro" component={NavCadastro} options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account-details" color={color} size={size}/>)
            , headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;