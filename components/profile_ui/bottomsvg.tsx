import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BottomSvg() {
  return (
    <Svg width={358} height={693} viewBox="0 0 358 693" fill="none" style={styles.bottomSvg}>
      <Path
        d="M4 45C4 20.147 24.147 0 49 0H309C333.853 0 354 20.147 354 45V649H4V45Z"
        fill="black"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  bottomSvg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    top: 70,
    left: 13,
  },
});

