import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function Map() {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <>
      <MapView style={styles.map} region={location} />
      <Text>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
