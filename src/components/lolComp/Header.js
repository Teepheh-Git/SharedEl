// @flow
import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {icons} from "../../constants";

const Header = () => {
    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Image style={styles.image} resizeMode="cover" source={icons.lol}/>

                <View style={styles.box2}>
                    <Image style={styles.miniIcons} resizeMode="contain" source={icons.Search}/>
                    <Image style={styles.miniIcons} resizeMode="contain" source={icons.logoIcon}/>
                </View>
            </View>


        </View>
    );
};

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: 20,

    },
    box: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center"

    },
    box2: {
        flexDirection: "row",
        justifyContent: "flex-end"


    },
    image: {
        width: "20%",
        height: 40,

    },
    miniIcons: {
        width: "18%",
        height:30,
        marginRight: 15
    },


});
