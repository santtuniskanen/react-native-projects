import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const [screenOrientation, setScreenOrientation] = useState("portrait");
  const [isPortrait, setIsPortrait] = useState(true);

  const lockToPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (value) => {
        if (
          value.orientationInfo.orientation ===
          ScreenOrientation.Orientation.PORTRAIT_UP
        ) {
          setScreenOrientation("portrait");
          setIsPortrait(true);
        } else if (
          value.orientationInfo.orientation ===
          ScreenOrientation.Orientation.LANDSCAPE_RIGHT
        ) {
          setScreenOrientation("landscape");
          setIsPortrait(false);
        }
      }
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        isPortrait ? styles.portrait : styles.landscape,
      ]}
    >
      {(function () {
        if (isPortrait) {
          return <Text>This content is only for portrait</Text>;
        } else {
          return <Text>This content is only for landscape</Text>;
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  portrait: {
    backgroundColor: "#ccc",
  },
  landscape: {
    backgroundColor: "#999",
  },
});
