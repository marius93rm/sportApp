import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function Card(props) {
    return (

        <ImageBackground style={styles.card} source={props.source}>
            <View style={styles.cardContent}>
                <Text style={styles.attivita}>{props.attivita}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 100,
        borderRadius: 10,
        overflow: "hidden",
        margin: 10,
    },
    attivita: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
});