import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { React, useState} from "react"; //progresso TODO

export default function Progress() {
    return (
        <View style={styles.progresso}>
            <ImageBackground resizeMode="cover" source={require('../assets/images/gradient.png')} style={styles.background}>

            <Text style={styles.contatore}>25</Text>
            <Text style={styles.testo}> Your progress </Text> 
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    progresso: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    background: {
        width: 600,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    testo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
    contatore: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
    
});
