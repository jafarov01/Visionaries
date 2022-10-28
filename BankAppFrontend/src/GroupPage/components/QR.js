import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QR = () => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Allow Camera?
        </Text>
        <Button onPress={requestPermission} title="Allow" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(CameraType.cameraOn == false);
    // setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
            <View style={styles.QR_SCANNER}></View>
            <TouchableOpacity style={styles.button} onPress={goBack}>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    marginHorizontal: 100,
    marginTop: 100,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons:{
    flex:1,
    flexDirection: "row"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "white",
    color: "black",
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  QR_SCANNER: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default QR;