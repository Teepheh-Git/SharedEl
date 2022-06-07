// @flow
import React from 'react';
import {View, Image, StyleSheet} from "react-native";

const Glassmorphism = ({}) => {
    return (
        <View>
            <Image blurRadius={20} source={require("../../../assets/images/img2.jpg")} resizeMode={"cover"}
                   style={{width: "100%", height: "100%"}}/>

        </View>
    );
};
export default Glassmorphism
