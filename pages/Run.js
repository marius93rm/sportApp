import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Avatar from "../components/Avatar";

export default function Run({ navigation }) {
    return (
        <View style={styles.container}>
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
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <MaterialIcons name="settings-backup-restore" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 50,
    },
});

