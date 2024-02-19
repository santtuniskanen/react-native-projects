import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { API_URL, API_KEY, ICONS_URL } from '@env';

export default function Weather(props) {
    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const url = API_URL +
            'lat=' + props.latitude +
            '&lon=' + props.longitude +
            '&units=metric' +
            '&appid=' + API_KEY;

        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                setTemp(json.main.temp);
                setDescription(json.weather[0].description);
                setIcon(ICONS_URL + json.weather[0].icon + '@2x.png');
            })
            .catch((error) => {
                setDescription("Error retrieving weather information.");
                console.log(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.temp}>{temp}°C</Text>
            {icon &&
                <Image source={{ uri: icon }} style={styles.icon} />
            }
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    temp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});
