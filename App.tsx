import React from "react"

import{View,Text,StyleSheet,StatusBar} from "react-native"

import {colors} from "./src/global/styles"
import { SingInScreen } from "./src/screens/authScreens/SignInScreen"
import SingInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen"

export default function App(){
  return(
    <View style ={styles.container}>
      <StatusBar
        barStyle= "light-content"
        backgroundColor = {colors.statusbar}
        
        />
        
    <SingInWelcomeScreen
    
    />  

      
    </View>
  )
}

const styles =StyleSheet.create({
  container: {flex:1}
})