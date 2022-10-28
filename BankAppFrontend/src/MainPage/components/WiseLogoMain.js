import { Flex } from "native-base";
import { Image, StyleSheet } from "react-native";

const WiseLogoMain = () => {
  return (
    <Flex
      height={"50px"}
      alignItems={"flex-start"}
      maxWidth={"100%"}
      px={"10px"}
    >
      <Image
        style={logoStyle.image}
        resizeMode={"center"}
        source={require("../assets/wiselogo.png")}
      />
    </Flex>
  );
};

const logoStyle = StyleSheet.create({
  image: {
    maxHeight: "100%",
    maxWidth: "30%",
    margin: 0
  },
});

export default WiseLogoMain;
