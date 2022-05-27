// @flow
import React, {useRef} from 'react';
import {FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import NotchResponsive from "../../components/NotchResponsive";
import {COLORS, SIZES} from "../../constants";
import {SharedElement} from "react-navigation-shared-element";
import {FONTS} from "../../constants/theme";
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from "@expo-google-fonts/oswald";

const zoomIn = {
    0: {

        opacity: 0,
        scale: 0
    },
    1: {
        opacity: 1,
        scale: 1
    }

}

const ImageDetails = ({navigation, route}) => {


    const bottomRef = useRef();

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

                        <Pressable style={{paddingLeft: SIZES.font10, flexDirection: "row", alignItems: "center"}}
                                   onPress={() => {

                                       Promise.all([
                                           bottomRef.current.fadeOut(1000)
                                       ]).then(() => navigation.goBack())

                                   }}>
                            <Ionicons name="arrow-back-circle-outline" size={SIZES.font1 * 1.5} color={COLORS.white}/>
                        </Pressable>

                        <SharedElement id={`${item.id}.head`}>
                            <Text style={styles.title}>{item.title}</Text>
                        </SharedElement>

                        {/*<Text style={[styles.title, {flex: 2}]}>FLAVOURS</Text>*/}




                            <FlatList
                                data={[...Array(8).keys()]}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item, index}) => {
                                    return (
                                        <Animatable.View ref={bottomRef} animation={zoomIn} duration={700}
                                                         delay={500 + (index * 100)}
                                                         style={styles.bottomBox}>

                                            <Image source={require("../../../assets/images/botImg.jpg")}
                                                   resizeMode="cover"
                                                   style={styles.botoomImgs}/>

                                            <Text style={[styles.title, {
                                                marginTop: 10, ...FONTS.body7,
                                                fontFamily: "Oswald_400Regular"
                                            }]}># Flavour {index + 1}. </Text>
                                        </Animatable.View>
                                    )
                                }}

                            />



                    </View>


                </ImageBackground>

            </SharedElement>

        </>
    );
};


ImageDetails.sharedElements = (route, otherRoute, showing) => {
    // const {item} = route.params;
    // return [{id: route.params.item.id, animation: 'fade-in',}];
    return [route.params.item.id, `${route.params.item.id}.head`];
}

export default ImageDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.font10,
        paddingVertical: SIZES.font7,

    },
    imgBk: {
        width: "100%",
        height: "100%",

    },
    title: {
        position:"absolute",
        ...FONTS.h3,
        fontFamily: "Oswald_700Bold",
        color: COLORS.white,
        // marginTop: SIZES.font1,
        left: SIZES.font8,
        letterSpacing: 1.7
    },
    layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.15)",
    }, bottomBox: {
        height: SIZES.height * 0.25,
        width: SIZES.width * 0.35,
        backgroundColor: "rgba(255,255,255,0.29)",
        marginLeft: SIZES.font10,
        alignSelf: "flex-end",
        marginBottom: SIZES.font1 * 2,
        borderRadius: 10,
        padding: "5%"


    },
    botoomImgs: {
        width: "100%",
        height: "70%",
        backgroundColor: "red",
        borderRadius: 10,

    }


})
