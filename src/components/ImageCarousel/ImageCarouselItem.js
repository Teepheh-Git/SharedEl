// @flow
import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from "@expo-google-fonts/oswald";
import {FONTS} from "../../constants/theme";
import {SharedElement} from "react-navigation-shared-element";

const ImageCarouselItem = ({item, textStyle, imgStyles, onPress}) => {


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


            <View style={[styles.box, {overflow: "hidden"}]}>


            <SharedElement id={item.id}>
                <Animated.Image resizeMode="cover" source={item.image}
                                style={[styles.img, StyleSheet.absoluteFillObject ,{...imgStyles}]}/>
            </SharedElement>

            </View>



            <View style={styles.layer}>
                <SharedElement id={`${item.id}.head`}>

                    <Animated.Text style={[styles.title, {...textStyle}]}>{item.title}</Animated.Text>

                </SharedElement>

            </View>


        </Pressable>
    );
};

export default ImageCarouselItem

const styles = StyleSheet.create({
    box: {
        height: SIZES.height * 0.7,
        width: SIZES.width * 0.85,
        marginRight: SIZES.font10,
        borderRadius: SIZES.font1
    },
    img: {
        height: SIZES.height * 0.7,
        width: SIZES.width * 0.85,
        // position:"absolute",
        // marginRight: SIZES.font10,
        borderRadius: SIZES.font1
    },
    layer: {
        position: "absolute",
        height: SIZES.height * 0.7,
        width: SIZES.width * 0.85,
        backgroundColor: "rgba(0,0,0,0.15)",
        borderRadius: SIZES.font1,
        justifyContent: "flex-end",


    },
    title: {
        position:"absolute",
        ...FONTS.h2,
        fontFamily: "Oswald_700Bold",
        color: COLORS.white,
        marginTop: SIZES.font1,
        // marginLeft: SIZES.font5,
        letterSpacing: 1.7,
        bottom: SIZES.font1,
        // alignSelf: "flex-end"

    }
})
