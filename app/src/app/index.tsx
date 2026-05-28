import {View,StyleSheet,Text, ScrollView,} from "react-native"
import {Posto} from "@/app/components/image"
import { Input } from "@/app/components/input"
import React, { useState } from "react"
import { Botao1 } from "@/app/components/botao"
import { Resultado } from "@/app/components/resultados"


export default function IndexPage(){
    
        const [precoGasolina, setPrecoGasolina] = useState("")
        const [precoEtanol, setPrecoEtanol] = useState("")
        const [resultadoTexto, setResultadoTexto] = useState("")
        const [porcentagem, setPorcentagem] = useState(0)

        const calcularVantagem = () => {
        const etanol = parseFloat(precoEtanol.replace(",", "."))
        const gasolina = parseFloat(precoGasolina.replace(",", "."))

        if (!etanol || !gasolina) {
            alert("digite os dois valores!");
            return;
        }

        const relacao = etanol / gasolina;
        const infoPorcentagem = relacao * 100;
        setPorcentagem(infoPorcentagem);

        if (relacao < 0.7) {
            setResultadoTexto("Abasteça com: Etanol");
        } else {
            setResultadoTexto("Abasteça com: Gasolina");
        }
    };

    return(       
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.conteiner}>
                    <Text style={styles.title}>Álcool ou Gasolina </Text>
                    <Posto />
                    <Text style={styles.texto}>Gasolina</Text>
                    <Input placeholder="Digite o valor da Gasolina:" placeholderTextColor={"#FFFFFF84"} keyboardType="numeric"
                    value={precoGasolina} onChangeText={setPrecoGasolina} />
                    <Text style={styles.texto}>Etanol</Text>
                    <Input placeholder="Digite o valor do Etanol:" placeholderTextColor={"#FFFFFF84"} keyboardType="numeric"
                    value={precoEtanol} onChangeText={setPrecoEtanol}/>
                    <Botao1 title="VERIFICAR VANTAGEM" onPress={calcularVantagem} /> 
                    <Resultado resultado={resultadoTexto} porcentagem={porcentagem} />

                </View>
        </ScrollView>
    ) 
}


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, 
    },

    conteiner:{
        flex: 1,
        backgroundColor: "#8E8E8E81",
        justifyContent: "flex-start",
        padding: 20,
        
    },

    title:{ 
        fontSize: 13,
        color: "#ff9400",
        textShadowColor: "#F6BE7156", 
        textShadowRadius: 1.25,   
        fontWeight: "bold",   
        marginTop: 20
    },
       texto:{
        height: 23,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 13,
        color: "white",
        textShadowColor: "black", 
        textShadowRadius: 1.5, 
        marginTop:20
    }
})