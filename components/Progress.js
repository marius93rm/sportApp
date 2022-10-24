import { StyleSheet, View, Text } from "react-native";
import { React, useState} from "react"; //progresso TODO

export default function Progress() {
    return (
        <View style={styles.progresso}>
            <Text style={styles.contatore}>25</Text>
            <Text style={styles.testo}> Your progress </Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    progresso: {
        
    },
    contatore: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
    testp: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
});
