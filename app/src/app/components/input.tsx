import React, { useState } from "react";
import { TextInput, StyleSheet,Text,View, TextInputProps} from "react-native"


export function Input({...reset}:TextInputProps){

    const [texto, setTexto] = useState("");
    const tamanhoFonteDinamico = texto.length === 0 ? 15 : 40;
    return(
        <View> 
            <TextInput 
                value={texto}
                onChangeText={(val) => setTexto(val)}
                style={[styles.txtinput, { fontSize: tamanhoFonteDinamico }]} 
                {...reset}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtinput: {
        height: 48,
        width: "100%",
        borderWidth: 4,
        borderColor: "#ff9400",
        borderRadius: 19,
        shadowRadius: 15,
        shadowColor: "#FF950056",
        backgroundColor: "#FFAD3B4B",
        padding: 20,
        fontSize: 40,
        color: "white", 
        textAlign: "center"
    },
    texto:{
        height: 23,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 13,
        color: "white",
        textShadowColor: "black", 
        textShadowRadius: 1.5, 
        marginTop:35
        

    }
})