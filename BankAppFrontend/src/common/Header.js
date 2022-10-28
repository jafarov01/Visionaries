import { Flex, Avatar } from "native-base";
import { Pressable } from "react-native";
import WiseLogoMain from "../MainPage/components/WiseLogoMain";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <Flex
      justifyContent={"space-between"}
      direction={"row"}
      width={"90%"}
      alignItems={"center"}
      mx={"auto"}
    >
      <Pressable onPress={goBackHandler}>
        <Avatar
          height={"21px"}
          width={"21px"}
          backgroundColor={"#f2f5f7"}
          source={{ uri: "https://i.hizliresim.com/oxqnlot.png" }}
        ></Avatar>
      </Pressable>
    </Flex>
  );
};

export default Header;
