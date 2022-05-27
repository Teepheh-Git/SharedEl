// @flow
import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold,
    useFonts
} from "@expo-google-fonts/oswald";
import {FONTS} from "../../constants/theme";
import {SharedElement} from "react-navigation-shared-element";

const ImageCarouselItem = ({item, onPress}) => {


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
        <Pressable onPress={onPress}>

            <SharedElement id={item.id}>

                <ImageBackground resizeMode="cover" source={item.image} imageStyle={styles.img2} style={styles.img}>

                    <View style={styles.layer}>
                        <SharedElement id={`${item.id}.head`}>

                            <Text style={styles.title}>{item.title}</Text>

                        </SharedElement>

                    </View>


                </ImageBackground>

            </SharedElement>


        </Pressable>
    );
};

export default ImageCarouselItem

const styles = StyleSheet.create({
    img: {
        height: SIZES.height * 0.7,
        width: SIZES.width * 0.85,
        marginRight: SIZES.font10,
        borderRadius: SIZES.font1
    },
    img2: {
        borderRadius: SIZES.font1,


    },
    layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.15)",
        borderRadius: SIZES.font1,
        justifyContent: "flex-end",


    },
    title: {
        ...FONTS.h2,
        fontFamily: "Oswald_700Bold",
        color: COLORS.white,
        marginTop: SIZES.font1,
        marginRight: SIZES.font5,
        letterSpacing: 1.7,
        bottom: SIZES.font1,
        alignSelf:"flex-end"

    }
})
