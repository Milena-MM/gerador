import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

export function ModalPassword(){
    return(
        <View style = {styles.container}>
            <Text>teste modal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

