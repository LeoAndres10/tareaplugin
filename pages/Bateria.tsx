
import React from 'react'
import * as Battery from 'expo-battery';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useBatteryLevel, useBatteryState } from 'expo-battery';
export default function Bateria() {
  const batteryLevel = useBatteryLevel();
    const batteryState = useBatteryState();
   

   async function getBatteryStateAsync(){
    const carga= await Battery.getBatteryStateAsync();
    let mensaje;
    if(carga===2){
        return mensaje='Esta Cargando'
    }else{
        return mensaje= 'No esta cargando'
    }
   

   }




  return (
    <View style={styles.container}>
      <Text>Nivel de bateria: {batteryLevel}</Text>
      <Text> Estado de bateria: {batteryState}</Text>
    <Text> Cargando: {getBatteryStateAsync()}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  

