import { StyleSheet, Text, TouchableOpacity } from "react-native"


interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Botao1({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.textobotao}>{title}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    botao: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFAD3B4B",
        shadowColor: "#FF950056",
        borderColor: "#ff9400",
        borderRadius: 19,
        shadowRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        borderWidth: 2,
    },
    textobotao: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textShadowColor: "black",
        textShadowRadius: 1.5,
    }
})