// @flow
import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from "react-native";
import NotchResponsive from "../../components/NotchResponsive";
import {carouselImages} from "../../constants/dummyData";
import ImageCarouselItem from "../../components/ImageCarousel/ImageCarouselItem";
import {SIZES} from "../../constants";
import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    useFonts
} from '@expo-google-fonts/oswald'

const ImageCarousel = ({navigation}) => {

    const scrollX = useRef(new Animated.Value(0)).current;


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
            <NotchResponsive/>

            <View style={styles.header}>

            </View>

            <Animated.FlatList
                data={carouselImages.reverse()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                snapToInterval={SIZES.width - SIZES.font10 * 3.8}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true}
                )}
                renderItem={({item, index}) => {


                    const inputRange = [
                        (index - 1) * SIZES.width,
                        index * SIZES.width,
                        (index + 1) * SIZES.width
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [ SIZES.width * 0.08, 0, - SIZES.width * 0.08],
                        extrapolate: "clamp"
                    })

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1.4, 1],
                        extrapolate: "clamp"
                    })


                    return (
                        <ImageCarouselItem item={item}
                                           textStyle={{
                                               transform: [{translateX}]
                                           }}
                                           imgStyles={{
                                               transform: [{scale}]

                                           }}
                                           onPress={() => navigation.push("ImageDetails", {item})}/>
                    )

                }}

            />


            <Text> ImageCarousel</Text>
        </View>
    );
};

export default ImageCarousel

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.font10,
        paddingVertical: SIZES.font7,
    },
    header: {
        height: SIZES.height * 0.06
    }
})
