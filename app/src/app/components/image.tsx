import {View, StyleSheet, Image} from "react-native";

export function Posto(){
    return(
        <View style={styles.logoconteiner}> 
           <Image
            source={require("@/assets/baratao.png")}
            style={styles.logoposto} 
            /> 

        </View>
    )
}
const styles = StyleSheet.create({
    logoposto:{
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    logoconteiner:{
    
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:-5,
        marginTop: 6
    },

})