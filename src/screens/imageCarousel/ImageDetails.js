// @flow
import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Pressable} from "react-native";
import NotchResponsive from "../../components/NotchResponsive";
import {COLORS, SIZES} from "../../constants";
import {SharedElement} from "react-navigation-shared-element";
import {FONTS} from "../../constants/theme";
import {Ionicons} from '@expo/vector-icons';
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold,
    useFonts
} from "@expo-google-fonts/oswald";

const ImageDetails = ({navigation, route}) => {

    const {item} = route.params


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
        <>

            <SharedElement id={item.id}>

                <ImageBackground source={item.image} style={styles.imgBk}>

                    <View style={styles.layer}>
                        <NotchResponsive/>

                        <Pressable style={{paddingLeft: SIZES.font10, flexDirection: "row", alignItems:"center"}}
                                   onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-circle-outline" size={SIZES.font1 * 1.5} color={COLORS.white}/>
                            <SharedElement id={`${item.id}.head`}>
                                <Text style={styles.title}>{item.title}</Text>
                            </SharedElement>
                        </Pressable>


                    </View>


                </ImageBackground>

            </SharedElement>

        </>
    );
};

export default ImageDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.font10,
        paddingVertical: SIZES.font7,
    },
    imgBk: {
        width: "100%",
        height: "100%"
    },
    title: {
        ...FONTS.h3,
        fontFamily: "Oswald_700Bold",
        color: COLORS.white,
        // marginTop: SIZES.font1,
        marginLeft: SIZES.font1,
        letterSpacing: 1.7
    },
    layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.15)",
    },
})
