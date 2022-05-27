// @flow
import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
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

            <FlatList
                data={carouselImages.reverse()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                snapToInterval={SIZES.width -SIZES.font10*3.8}
                renderItem={({item}) => <ImageCarouselItem item={item} onPress={()=>navigation.push("ImageDetails", {item})}/>}

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
    header:{
        height:SIZES.height*0.06
    }
})
