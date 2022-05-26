// @flow
import React, {useRef, useState} from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Header from "../../components/lolComp/Header";
import {icons} from "../../constants";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from '@expo-google-fonts/oswald'
import {lolBackColors} from "../../constants/dummyData";
import {SharedElement} from "react-navigation-shared-element";

const {width, height} = Dimensions.get("window")


const Paginator = ({data, scrollX}) => {
    return (
        <View style={{
            flexDirection: "row",
            height: height * 0.02,
            alignSelf: "center",
            // backgroundColor: "white",
        }}>
            {data.map((_, index) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 30, 10],
                    extrapolate: "clamp",
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp",
                });

                const color = scrollX.interpolate({
                    inputRange,
                    outputRange: ["blue", "#CF21BF", "green"],
                    extrapolate: "clamp",
                });

                return (
                    <Animated.View
                        style={[styles.dot, {width: dotWidth, opacity, backgroundColor: color}]}
                        key={index.toString()}
                    />
                );
            })}
        </View>
    );
};


const LeagueMain = ({navigation}) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const slidesRef = useRef(null);
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;


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
        // <SafeAreaView>
        <LinearGradient
            // Button Linear Gradient
            colors={['#000', '#40114A', '#000']}>

            <SafeAreaView style={styles.container}>
                <Header/>

                <View style={styles.profileBox}>
                    <Image resizeMode='cover' source={icons.profile_pic} style={styles.profileImage}/>
                    <Text style={styles.profileText}>
                        Hello! I am V {`\n`}
                        Mission is Completed
                    </Text>
                </View>


                <FlatList
                    data={lolBackColors}
                    horizontal
                    snapToInterval={width}
                    bounces={"false"}
                    snapToAlignment={"center"}
                    declerationRate={"fast"}
                    pagingEnabled
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: false},
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={slidesRef}
                    renderItem={({item, index}) => {
                        return (

                            <Pressable onPress={() => navigation.push("LeagueDetails", {item})}>


                                <ImageBackground resizeMode="contain" source={item.uri}
                                                 style={styles.backgroundRectangle}>

                                    <SharedElement id={item.id}>

                                        <Image resizeMode="contain" source={icons.main_char} style={styles.mainImage}/>

                                    </SharedElement>

                                </ImageBackground>


                            </Pressable>

                        )
                    }}


                />
                <View>

                    <Paginator data={lolBackColors} scrollX={scrollX}/>
                </View>


            </SafeAreaView>
        </LinearGradient>

        // </SafeAreaView>
    );
};

export default LeagueMain

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        height: "100%",
        width: "100%",

        paddingHorizontal: 40
    },

    background: {
        height: "100%"
    },
    profileBox: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        width: "45%", marginTop: 20

    },
    profileImage: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    profileText: {
        color: "white",
        fontFamily: "Oswald_400Regular",
        letterSpacing: 0.9

    },
    backgroundRectangle: {
        width,
        height: height * 0.5,
        // marginHorizontal: 20,

        // alignSelf: "center",
        // justifyContent: "center",
        top: 100

    },
    mainImage: {
        width: width * 0.8,
        height: "140%",
        alignSelf: "center",
        bottom: 290

    },
    dot: {
        height: 6,
        borderRadius: 4,
        marginHorizontal: 8,
        backgroundColor: "red",
    },


});
