// @flow
import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from '@expo-google-fonts/oswald'

const Menu = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Oswald_200ExtraLight,
        Oswald_300Light,
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold
    })

    if (!fontsLoaded) {
        return <Text>Loading</Text>;
    }
    return (
        <View style={styles.container}>

            <Pressable style={styles.box} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.text}>Tests</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => navigation.navigate("LeagueMain")}>
                <Text style={styles.text}>League Of Legends</Text>
            </Pressable>

        </View>
    );
};

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        height: 50,
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        // borderTopWidth:1,
        borderBottomColor: "grey"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Oswald_700Bold"
    }

});
