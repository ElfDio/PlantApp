import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../config/color";
const width = Dimensions.get('window').width;

const pageStyles = StyleSheet.create({
    headerText: {
        fontSize: 25
    },
    breadTitle: {
      fontSize: 15,
      fontWeight: "800"
  },
    headerTextW: {
        fontSize: 30,
        color: colors.w
    },
    textBold: {
      fontWeight: "800",
      fontSize: 25,
      marginLeft: 12
    },
    textBoldW: {
        fontWeight: "800",
        fontSize: 30,
        marginRight: 12,
        color: colors.w
      },
      textSmallW: {
        fontSize: 12,
        color: colors.w,
      },
    button: {
        backgroundColor: colors.main,
        paddingHorizontal: 16,
        paddingVertical:  18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },

    stepImage: {
      width: "100%", 
      marginVertical: 12, 
      height: Dimensions.get("window").height / 1.5
    },
    line: {
      position: "absolute", 
      right: 50, 
      top: 30
    },
    homeSearch: {
      backgroundColor: colors.w, 
      paddingHorizontal: 10, 
      borderRadius: 14, 
      marginVertical: 10, 
      height:45, 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center"
    },
    content: {
      backgroundColor: "#24201A", 
      borderRadius: 14, 
      padding: 10, 
      marginVertical: 20
    },
    categories: {
      width: 250, 
      height:200, 
      padding: 10, 
      marginRight: 5, 
      borderRadius: 20, 
      backgroundColor: "red", 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  });

  const Horizontal = StyleSheet.create({
    layout: {
        flexDirection: "row",
        alignItems: 'center',
    },
    top: {
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: "center",
    },

    adjust: {
        justifyContent: 'space-evenly',
    },

    spread: {
        justifyContent: 'space-between',
    },
    end: {
        justifyContent: 'flex-end',
    },
  });

  const SpaceStyles = StyleSheet.create({
    layout: {
        padding: 15,
        margin: 15
    },
  });

  const fontSize = StyleSheet.create({
    double: { fontSize: 0.10 * width},
    xxl: { fontSize: 0.08 * width},
    xl: { fontSize: 0.06 * width },
    l: { fontSize: 0.05 * width },
    d: { fontSize : 0.04 * width },
    m: { fontSize: 0.03 * width },
    s: { fontSize: 0.02 * width },
    xs: { fontSize: 0.02 * width },
    custom: { fontSize: 16, lineHeight: 24}
  });

  
  export { pageStyles, Horizontal, SpaceStyles, fontSize };