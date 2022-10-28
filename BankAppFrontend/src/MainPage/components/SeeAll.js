import { Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SeeAll = () => {
  const navigation = useNavigation();
  const navigateHandler = () => {
    navigation.navigate('GroupPageMain');
  };

  return (
    <Pressable
      borderRadius={"5px"}
      py={"5px"}
      px={"10px"}
      backgroundColor={"#e3e5e8"}
      onPress={navigateHandler}
    >
      <Text fontWeight={"600"} color={"#00B9FF"}>See all</Text>
    </Pressable>
  );
};

export default SeeAll;
