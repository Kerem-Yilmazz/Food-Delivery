import React,{useState,useRef} from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,TextInput} from "react-native";
import { colors, parameters } from "../../global/styles";
import * as Animatable from 'react-native-animatable';

import Swiper from "react-native-swiper";

import { Icon,Button,SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import {title} from "../../global/styles";

export default function SingInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent: 'flex-start', alignItems: 'center', paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>Senin Yakınındaki Restorantları</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>Keşfet</Text>
            </View>

            <View style ={{flex:4, justifyContent:"center"}}>
                    <Swiper autoplay={true}>
                        <View style ={styles.slide1}>
                        <Image
                            source={require("../../screens/kebap.jpg")}
                            style={{width:"100%",height:"100%"}}
                        />
                        </View>

                        <View style ={styles.slide2}>
                        <Image
                            source={require("../../screens/tatlı.jpg")}
                            style={{width:"100%",height:"100%"}}
                        />
                        </View>

                        <View style ={styles.slide3}>
                        <Image
                            source={require("../../screens/hamburger1.jpg")}
                            style={{width:"100%",height:"100%"}}
                        />
                        </View>
                        <View style ={styles.slide3}>
                        <Image
                            source={require("../../screens/iskender.jpg")}
                            style={{width:"100%",height:"100%"}}
                        />
                        </View>
                        


                    </Swiper>
            </View>
            
            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>
            <View style={{marginHorizontal:20, marginVertical:30}}>
                    <Button
                        title="Giriş Yap"
                        buttonStyle ={parameters.styledButton}
                        titleStyle ={parameters.buttonTitle}
                        onPress={() =>{
                            navigation.navigate("SingInScreen")
                        }}
                    />
            </View>

            <View style={{marginHorizontal:20,marginTop:-10}}>
                    <Button
                        title="Hesap Oluştur"
                        buttonStyle ={styles.createButton}
                        titleStyle ={styles.createButtonTitle}

                    />
            </View>

            </View>

             
        </View>
    )
}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
        borderColor:"black"
        
    },
      createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
      }
})