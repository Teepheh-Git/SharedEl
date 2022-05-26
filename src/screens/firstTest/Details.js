// @flow
import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {data} from "../../constants/dummyData";
import {SharedElement} from "react-navigation-shared-element";

const Details = ({navigation, route}) => {

    const {item} = route.params;
    return (
        <SafeAreaView style={styles.container}>

            <Pressable onPress={() => navigation.goBack()}>
                <Text>Back</Text>

            </Pressable>

            <View style={{flexDirection: "row"}}>
                {
                    data.map((item) => (


                        <SharedElement id={item.id}>
                            <Image resizeMode="cover" source={{uri: item.image}} style={styles.image}/>
                        </SharedElement>


                    ))
                }

            </View>


        </SafeAreaView>
    );
};


// Details.sharedElement = (route, otherRoutes, showing) => {
//     const {item} = route.params;
//     // return [`item.${item.id}.image`]
//     return data.map((item) => `item.${item.id}.image`)
// }


export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    box: {
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        width: 200,
        overflow: "hidden",
        height: 150,
        backgroundColor: "rgba(125,114,114,0.22)"

    },
    image: {
        width: 120,
        height: 120,
        // alignSelf: "flex-end",
        borderRadius: 5,

        // backgroundColor: "cyan"
    }, text: {
        fontSize: 28
    }
});
