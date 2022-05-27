import {Dimensions, Platform} from "react-native";

const {width, height} = Dimensions.get("window");

export const COLORS = {
    // primary colors
    primary: "#5C2682",
    secondary: "#C4A7D8",
    tertiary: "#FCF9FF",
    white: "#FFFFFF",
    grey: "#C4C4C4",
    black: "#494949",
    yellow: "#FAB613",


};
export const SIZES = {

    // font sizes
    largeTitle: Platform.OS === "android" ? width * 0.07 : width * 0.1,
    font1: width * 0.08,
    font2: width * 0.076,
    font3: width * 0.068,
    font4: width * 0.062,
    font5: width * 0.056,
    font6: width * 0.048,
    font7: width * 0.042,
    font8: width * 0.038,
    font9: width * 0.035,
    font10: width * 0.03,

    // app dimensions
    width,
    height,
};
export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle, fontWeight: "bold"},
    h1: {fontSize: SIZES.font1, fontFamily: "Sk-Modernist-Bold"},
    h2: {fontSize: SIZES.font2, fontFamily: "Sk-Modernist-Bold"},
    h3: {fontSize: SIZES.font3, fontFamily: "Sk-Modernist-Bold"},
    h4: {fontSize: SIZES.font4, fontFamily: "Sk-Modernist-Bold"},
    h5: {fontSize: SIZES.font5, fontFamily: "Sk-Modernist-Bold"},
    h6: {fontSize: SIZES.font6, fontFamily: "Sk-Modernist-Bold"},
    h7: {fontSize: SIZES.font7, fontFamily: "Sk-Modernist-Bold"},
    h8: {fontSize: SIZES.font8, fontFamily: "Sk-Modernist-Bold"},
    h9: {fontSize: SIZES.font9, fontFamily: "Sk-Modernist-Bold"},
    body1: {fontSize: SIZES.font1, fontFamily: "Sk-Modernist-Regular"},
    body2: {fontSize: SIZES.font2, fontFamily: "Sk-Modernist-Regular"},
    body3: {fontSize: SIZES.font3, fontFamily: "Sk-Modernist-Regular"},
    body4: {fontSize: SIZES.font4, fontFamily: "Sk-Modernist-Regular"},
    body5: {fontSize: SIZES.font5, fontFamily: "Sk-Modernist-Regular"},
    body6: {fontSize: SIZES.font6, fontFamily: "Sk-Modernist-Regular"},
    body7: {fontSize: SIZES.font7, fontFamily: "Sk-Modernist-Regular"},
    body8: {fontSize: SIZES.font8, fontFamily: "Sk-Modernist-Regular"},
    body9: {fontSize: SIZES.font9, fontFamily: "Sk-Modernist-Regular"},
    body10: {fontSize: SIZES.font10, fontFamily: "Sk-Modernist-Regular"},
};


const appTheme = {
    COLORS,
    SIZES,
};

export default appTheme;
