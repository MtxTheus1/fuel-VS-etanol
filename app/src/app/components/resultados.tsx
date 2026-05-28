import { View, Text, StyleSheet } from "react-native"

interface CardProps {
    resultado: string
    porcentagem: number
}

export function Resultado({ resultado, porcentagem }: CardProps) {
    if (!resultado) return null

    return (
        <View style={styles.cartao}>
            <Text style={styles.txtprincipal}>{resultado}</Text>
            <Text style={styles.subtexto}>O etanol está custando {porcentagem.toFixed(1)}% da gasolina.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        width: "100%",
        backgroundColor: "#FFAD3B4B",
        borderWidth: 3,
        borderColor: "#ff9400",
        borderRadius: 19,
        padding: 20,
        marginTop: 25,
        alignItems: "center",
    },
    txtprincipal: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 1.5,
        textAlign: "center",
        marginBottom: 8,
    },
    subtexto: {
        fontSize: 14,
        color: "#EAEAEADB",
        textAlign: "center",
    }
})