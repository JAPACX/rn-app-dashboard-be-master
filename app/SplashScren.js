import { View, StyleSheet } from "react-native";
import React from "react";
import { scale } from "./utils/generalFunction";
import * as Animatable from "react-native-animatable";

const SplashScren = () => {
  const imageAnimation = {
    0: { translateY: -100 },
    1: { translateY: 0 },
  };
  return (
    <View style={styles.container}>
      <Animatable.View
        animation={imageAnimation}
        duration={1500}
        delay={500}
        easing="ease-out"
      ></Animatable.View>
      <Animatable.Text animation="fadeInUpBig" style={styles.title}>
        BeMaster
      </Animatable.Text>
      <Animatable.Text animation="fadeInUpBig" style={styles.description}>
        Revolucion Digital
      </Animatable.Text>
    </View>
  );
};

export default SplashScren;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: scale(25),
    fontWeight: "500",
    color: "#FFFFFF",
  },
  description: {
    fontSize: scale(14),
    marginTop: 30,
    color: "#FFFFFF",
    fontWeight: "500",
    textAlign: "center",
  },
});
