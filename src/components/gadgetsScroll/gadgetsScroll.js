// @flow
import React from 'react';
import {Animated, StyleSheet, Text, View} from "react-native";
import {SIZES} from "../../constants";
import {FONTS} from "../../constants/theme";
import {useFonts} from "@expo-google-fonts/oswald";
import {Copse_400Regular} from '@expo-google-fonts/copse'


const GadgetsScroll = ({item, index, scrollX}) => {


    let [fontsLoaded] = useFonts({
        Copse_400Regular
    })

    if (!fontsLoaded) {
        return <Text>Loading</Text>;
    }

    const inputRange = [
        (index - 1) * SIZES.width,
        index * SIZES.width,
        (index + 1) * SIZES.width
    ]

    const inputRangeOpacity = [
        (index - 0.6) * SIZES.width,
        index * SIZES.width,
        (index + 0.6) * SIZES.width
    ]

    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
    })

    const translateTexts = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.width * 0.2, 0, -SIZES.width * 0.2],
    })
    const translateSubtitle = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.width * 0.3, 0, -SIZES.width * 0.3],
    })

    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0],
    })


    return (
        <View style={styles.box}>
            <Animated.Image resizeMode="contain" source={item.image} style={[styles.images, {transform: [{scale}]}]}/>

            <View style={{
                // backgroundColor: "red",
                marginTop: SIZES.font1 * 2, alignSelf: "flex-end", width: SIZES.width * 0.85
            }}>
                <Animated.Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={[styles.title, {
                        opacity,
                        transform: [{translateX: translateTexts}]
                    }]}>{item.title}</Animated.Text>
                <Animated.Text

                    style={[styles.subtitle, {
                        opacity,
                        // transform: [{translateX: translateSubtitle}]
                    }]}>{item.subtitle}</Animated.Text>

            </View>

        </View>
    );
};

export default GadgetsScroll

const styles = StyleSheet.create({
    box: {
        overflow: "hidden",

        // padding: 10
        // marginRight: 5,
        width: SIZES.width * 0.95,


    },
    images: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.48,
        // backgroundColor: "cyan",
        // marginLeft: 10,
        // marginHorizontal: 5,
        alignSelf: "center",
        borderRadius: 10
    },
    title: {
        // position:"absolute",
        ...FONTS.largeTitle,
        color: "black",
        marginRight: SIZES.font10,
        alignSelf: "flex-start",
        fontFamily: "Copse_400Regular"

    },
    subtitle: {
        // position:"absolute",
        left: 0,
        ...FONTS.h6,
        // alignSelf: "flex-end",
        color: "black",
        // marginRight: SIZES.font10,
        marginTop: SIZES.font9,
        textAlign: "left",
        fontFamily: "Copse_400Regular"

    }
})
