import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Home({ navigation }) {
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image}>

                <View style={styles.sopra} >
                    <Text style={styles.header}>Benvenuto</Text>
                    
                    <TextInput style={styles.input} placeholder="Inserisci nome" onChangeText={(username) => { setUsername(username) }} defaultValue={username}/>
                    {/* <Text style={styles.debug}>TEST: {username}</Text> */}
                
                </View>

                <View style={styles.sotto} >
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Dashboard", {username: username})}}>
                        <Text style={styles.label}> Iniziamo </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sopra: {
        flex: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sotto: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },



    header: {
        textTransform: 'uppercase',
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // bottom: 40,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
