import { Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const JarSeeAll = () => {
  const navigation = useNavigation();
  const navigateHandler = () => {
    navigation.navigate("GroupJarMain");
  };

  return (
    <Pressable
      borderRadius={"5px"}
      py={"5px"}
      px={"10px"}
      backgroundColor={"#e3e5e8"}
      onPress={navigateHandler}
    >
      <Text color={"#00B9FF"}>See All</Text>
    </Pressable>
  );
};

export default JarSeeAll;
