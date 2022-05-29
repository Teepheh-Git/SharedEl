// @flow
import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from "react-native";
import NotchResponsive from "../../components/NotchResponsive";
import {gadgetsImages} from "../../constants/dummyData";
import GadgetsScroll from "../../components/gadgetsScroll/gadgetsScroll";
import {SIZES} from "../../constants";
import {FONTS} from "../../constants/theme";

const GadgetsHome = ({navigation, route}) => {

    const scrollX = useRef(new Animated.Value(0)).current

    const inputRange = [-SIZES.width, 0, SIZES.width*1.08]

    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [SIZES.font1, 0, -SIZES.font1]
    })

    return (
        <View style={styles.container}>
            {/*<NotchResponsive/>*/}

            <View style={styles.tickerContainer}>
                <NotchResponsive/>

                {
                    gadgetsImages.map(({ticker}, index) => (
                        <Animated.View key={index} style={{transform: [{translateY}]}}>

                            <Text style={styles.ticker}>{ticker}</Text>
                        </Animated.View>
                    ))
                }
            </View>

            <Animated.FlatList
                data={gadgetsImages}
                horizontal
                snapToInterval={SIZES.width - 15}
                snapToAlignment={"start"}
                pagingEnabled
                scrollEventThrottle={16}
                contentContainerStyle={{
                    padding: 10,
                }}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {x: scrollX}}}
                    ], {useNativeDriver: true}
                )}
                renderItem={({item, index}) => <GadgetsScroll item={item} index={index} scrollX={scrollX}/>}
            />
            <View>
                <Text style={styles.gadgets}>GADGETS</Text>
                <View style={{flexDirection: 'row', alignSelf: "flex-end", marginBottom: SIZES.font1, right: 20}}>
                    {gadgetsImages.map((item, index) => (
                        <View key={item.id}
                              style={[styles.ring, {borderColor: item.color, borderWidth: index === 1 && 1}]}>
                            <View style={[styles.dots, {backgroundColor: item.color}]}/>
                        </View>

                    ))}
                </View>
            </View>

        </View>
    );
};

export default GadgetsHome


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    dots: {
        height: 10,
        width: 10,
        borderRadius: 10,
        alignSelf: "center"
    }, ring: {
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10, height: 15,
        width: 15,
        marginRight: 2,
    },
    gadgets: {
        position: "absolute",
        ...FONTS.largeTitle,
        color: "black",
        letterSpacing: 4,
        transform: [
            {translateX: -SIZES.width * 0.18},
            {translateY: -SIZES.width * 0.2},
            {rotateZ: "-90deg"},
            // {translateX: -2},
            // {translateY: 2},

        ]
    },

    tickerContainer: {
        top: SIZES.font1,
        overflow: "hidden",
        left: SIZES.font10,
        // backgroundColor: "cyan",
        position: "absolute",
        height: SIZES.font1 ,


    },
    ticker: {
        ...FONTS.h1,
        fontWeight: "800",
        lineHeight: SIZES.font1,
    }
})
