// @flow
import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {
    Dimensions,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {icons, SIZES} from "../../constants";
import {SharedElement} from "react-navigation-shared-element";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from '@expo-google-fonts/oswald'
import * as Animatable from 'react-native-animatable';
import NotchResponsive from "../../components/NotchResponsive";
import {FONTS} from "../../constants/theme";

const {width, height} = Dimensions.get("window")


const LeagueDetails = ({navigation, route}) => {

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
        <LinearGradient
            colors={['#000', '#40114A', '#000']}>
            <SafeAreaView style={styles.container}>

                <NotchResponsive/>

                <LinearGradient
                    colors={['#000', 'transparent']}>

                    <ImageBackground imageStyle={styles.imgStyle} style={styles.header} source={item.uri}>

                        <Pressable onPress={() => navigation.goBack()}>


                            <Image resizeMode="cover" source={icons.back} style={{
                                left: 10, width: 50, height: 50, backgroundColor: "transparent"
                            }}/>

                        </Pressable>

                        <SharedElement id={item.id}>


                            <Image resizeMode="contain" source={icons.main_char} style={styles.mainImage}/>

                        </SharedElement>

                    </ImageBackground>


                    <Image resizeMode="contain" source={icons.lol} style={styles.lol}/>


                    <View style={styles.divider}/>

                    <Animatable.View animation={"fadeInLeft"} duration={500} useNativeDriver={true}
                                     style={styles.infoBox}>
                        <Text style={styles.txt}>Game {`\n`}Action, Rpg</Text>
                        <Text style={styles.txt}>Downloads{`\n`}500M</Text>
                        <Text style={styles.txt}>Ratings{`\n`}4.7</Text>
                    </Animatable.View>
                    <View style={styles.divider}/>

                    <Text style={styles.txt2}>Review</Text>
                    <Animatable.Text useNativeDriver={true} animation={"zoomIn"} duration={500} style={styles.body}>There
                        are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing hidden in the middle of text. </Animatable.Text>


                    <Animatable.View animation={"fadeInUp"} duration={500} useNativeDriver={true}>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.dwn}>Download & Play</Text>
                        </TouchableOpacity>
                    </Animatable.View>


                </LinearGradient>


            </SafeAreaView>


        </LinearGradient>
    );
};

export default LeagueDetails


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        height: "100%",
        width: "100%",

        // paddingHorizontal: 40
    },
    header: {
        height: height * 0.4,
        width: width,
        // bottom:20
    },
    imgStyle: {
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        opacity: 0.7


    },
    mainImage: {
        width: width * 1.6,
        height: "105%",
        alignSelf: "center",
        bottom: 80

    },
    lol: {
        width: SIZES.font1 * 7,
        height: SIZES.font1 * 3,
        alignSelf: "center",
        marginTop: 20,
        // marginBottom: 10
        // bottom: 80

    }, divider: {
        backgroundColor: "#C021B44D",
        height: 2,
        width: width * 0.8,
        alignSelf: "center"

    },
    infoBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    txt: {
        ...FONTS.body7,
        color: "#fff",
        marginVertical: 10,

        fontFamily: "Oswald_400Regular",
    },
    txt2: {
        color: "#fff",
        marginTop: 10,
        fontSize: 18,
        fontFamily: "Oswald_400Regular",
        marginLeft: 40
    },
    body: {
        ...FONTS.body9,

        color: "#fff",
        // marginVertical: 10,
        // fontSize: 16,
        fontFamily: "Oswald_300Light",
        marginHorizontal: 40
    },
    button: {
        height: 60,
        width: 230,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#A81F9E",
        alignSelf: "center",
        marginTop: 20
    },
    dwn: {
        color: "#fff",
        marginVertical: 10,
        fontSize: 22,
        fontFamily: "Oswald_400Regular",
    },


})
