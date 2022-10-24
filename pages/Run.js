import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Avatar from "../components/Avatar";

export default function Run({ navigation }) {


    //todo: reset timer

    return (

        <View style={styles.container}>
            <ImageBackground resizeMode="cover" source={require('../assets/images/run.jpg')} style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <MaterialIcons name="chevron-left" size={24} color="#161F3D" />
                    </TouchableOpacity>
                    <Avatar />
                </View>

                <View style={styles.body}>
                    <View style={styles.top}>
                        <Text style={styles.title}>Run</Text>
                        <Text style={styles.subtitle}>Task 100m</Text>
                    </View>
                    <View style={styles.center}>
                        <Text>CONTATORE</Text>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={() => console.log("ciao")}>
                            <MaterialIcons name="settings-backup-restore" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 30,
    },
    body: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

