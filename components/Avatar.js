import { StyleSheet, View, Image } from "react-native";


export default function Avatar() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/avatar.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#fff",
        overflow: "hidden",
    }, 
    image: {
        width: 80,
        height: 80,
    }
});