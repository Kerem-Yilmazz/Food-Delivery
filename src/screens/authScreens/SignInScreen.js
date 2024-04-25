import React,{useState,useRef} from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,TextInput} from "react-native";
import { colors, parameters } from "../../global/styles";
import * as Animatable from 'react-native-animatable';

import { Icon,Button,SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import {title} from "../../global/styles";


export function SingInScreen({navigation}){

    const[textInput2Foussued,setTextInput2Fossued]=useState(false)
    const textInput1 =useRef(1)
    const textInput2 =useRef(2)

    return(
        <View styles = {styles.container}>
            <Header title="Hesabım" navigation={navigation}/>

            <View style ={{marginLeft:20, marginTop:10}}>
                <Text style={title}>Giriş Yap</Text>
            </View>

            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={styles.text1}>Lütfen kayıt olduğunuz</Text>
                <Text style={styles.text1}>e-mail ve şifrenizi giriniz.</Text>
            </View>
            <View style={{marginTop:20}}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder="E-mail"
                        ref={textInput1}
                    />
                </View>
            </View>
            <View>
               
                <View style ={styles.TextInput2}>
                <Animatable.View animation={textInput2Foussued?"":"fadeInLeft"} duration={400}>
                <Icon
                        name="lock"
                        iconStyle={{color:"#86939e"}}
                        type="material"
                        style={{}}
                    />
                        
                    
                </Animatable.View>
                
                <TextInput
                        style={{width:"80%"}}
                        placeholder="Şifre"
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Fossued(false)
                        }}
                        onBlur={()=>{
                            setTextInput2Fossued(true)
                        }}
                    />
                <Animatable.View animation={textInput2Foussued?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name="visibility-off"
                        iconStyle={{color:"#86939e"}}
                        type="material"
                        style={{marginRight:10}}
                        
                    />

                </Animatable.View>
                </View>
            
            </View>
            <View style={{marginHorizontal:20, marginVertical:30}}>
                    <Button
                        title="Giriş Yap"
                        buttonStyle ={parameters.styledButton}
                        titleStyle ={parameters.buttonTitle}
                            onPress={()=>{navigation.navigate("HomeScreen")}}
                    />
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{...styles.text1,textDecorationLine:"underline"}}>Şifremi Unuttun ?</Text>
            </View>
            <View style={{alignItems:"center",marginTop:20,marginBottom:20}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Veya</Text>
            </View>
            <View>
                <SocialIcon
                    title="FaceBook ile Giriş Yap"  
                    button   
                    type="facebook"
                    style={styles.SocialIcon} 
                    onPress={()=>{}}          
                />
            </View>
            <View>
                <SocialIcon
                    title="Google ile Giriş Yap"  
                    button   
                    type="google"
                    style={styles.SocialIcon} 
                    onPress={()=>{}}          
                />
            </View>
            <View style={{marginTop:20,marginBottom:20,marginLeft:10}}>
                <Text style={{fontSize:15}}>Hesap Oluşturmak</Text>
                <Text style={{fontSize:15}}>  İster Misiniz ?</Text>
            </View>
            <View style={{alignItems:"flex-end",marginHorizontal:20}}>
                    <Button
                        title="Hesap Oluştur"
                        buttonStyle ={parameters.createButton}
                        titleStyle ={parameters.createButtonTitle}

                    />
            </View>

        </View>
    )

}
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:"#86939e",
        fontSize:16
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:15,
    },

    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft:15,
    },
    SocialIcon :{
        borderRadius:12,
        height:50
    }
   
})