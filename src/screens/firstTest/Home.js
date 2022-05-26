// @flow
import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {data} from "../../constants/dummyData";
import {SharedElement} from "react-navigation-shared-element";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            {/*    data={data}*/}
            {/*    showsVerticalScrollIndicator={false}*/}
            {/*    renderItem={({item, index}) => (*/}

                    <View style={styles.box}>
                        {
                            data.map((item)=>(
                                <>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => {
                                        navigation.push("Details", {item})
                                    }}>

                                        <SharedElement id={item.id}>
                                            <Image resizeMode="cover" source={{uri: item.image}} style={styles.image}/>
                                        </SharedElement>


                                    </TouchableOpacity>
                                </>
                            ))
                        }





                    </View>

                {/*)}*/}
            {/**/}
            {/*/>*/}


        </SafeAreaView>
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // flexWrap:"wrap",

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    box: {
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        width: "95%",
        // overflow: "hidden",
        // height: 150,
        backgroundColor: "rgba(125,114,114,0.22)"

    },
    image: {
        width: 110,
        height: 110,
        alignSelf: "flex-end",
        borderRadius: 5,

        // backgroundColor: "cyan"
    }, text: {
        fontSize: 28
    }
});
