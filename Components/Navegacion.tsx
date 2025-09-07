import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Calendario from '../pages/Calendario';
import Bateria from '../pages/Bateria';


export default function Navegacion() {

  const tab= createBottomTabNavigator();

  return (

    <NavigationContainer>
        <tab.Navigator>
            
        <tab.Screen name='Calendario' component={Calendario}></tab.Screen>
        <tab.Screen name='Bateria' component={Bateria}></tab.Screen>

        </tab.Navigator>
    </NavigationContainer>
   

  )
}