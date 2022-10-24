import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Avatar from '../components/Avatar';
import Progress from '../components/Progress';
import Card from '../components/Card';

export default function Dashboard({ route, navigation }) {
    const { username } = route.params;

    const NavigateRun = () => {
        navigation.navigate('Run', { username: username });
    }

    const NavigatePowerlifting = () => {
        navigation.navigate('Powerlifting', { username: username });
    }

    const NavigatePushups = () => {
        navigation.navigate('Pushups', { username: username });
    }

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.back}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <MaterialIcons name="chevron-left" size={24} color="#161F3D" />
                    </TouchableOpacity>
                    <Text style={styles.ciao}>Hello, {username}</Text>
                </View>
                <Avatar />
            </View>

            <View style={styles.body}>
                <Progress />
                <Text style={styles.title}>Sport exercises</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => { navigation.push("Run") }}>
                    <Card attivita="Run" source={require('../assets/images/runButton.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.push("Powerlifting") }}>
                    <Card attivita="Powerlifting" source={require('../assets/images/powerliftingButton.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.push("Pushups") }}>
                    <Card attivita="Pushups" source={require('../assets/images/pushupsButton.jpg')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
    },
    ciao: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'start',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#161F3D',
        marginTop: 50,
    },
});