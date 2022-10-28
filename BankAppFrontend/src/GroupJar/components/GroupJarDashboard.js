import { Flex, Pressable, Text } from "native-base";
import GroupJarScroll from "./GroupJarScroll";
import groupJar from "../../../fakeData/groupJar";

const GroupJarDashboard = () => {
  return (
    <Flex direction="row" height={"100%"} width={"100%"}>
      <Flex height={"160px"} width={"35%"} justifyContent={"space-between"}>
        <Text
          fontSize={"18px"}
          color={"#2e4369"}
          fontWeight={"700"}
          textAlign={"center"}
          margin={"0px"}
        >
          Your groups · {groupJar.length}
        </Text>
        <Pressable
          height={"60px"}
          borderRadius={"5px"}
          py={"5px"}
          px={"10px"}
          backgroundColor={"#e3e5e8"}
        >
          <Text
            fontSize={"15px"}
            color={"#2e4369"}
            fontWeight={"bold"}
            margin={"auto"}
            textAlign={"center"}
          >
            Withdraw
          </Text>
        </Pressable>
        <Pressable
          height={"60px"}
          borderRadius={"5px"}
          py={"5px"}
          px={"10px"}
          backgroundColor={"#e3e5e8"}
        >
          <Text
            fontSize={"15px"}
            fontWeight={"bold"}
            color={"#2e4369"}
            margin={"auto"}
            textAlign={"center"}
          >
            Add Money
          </Text>
        </Pressable>
      </Flex>
      <GroupJarScroll />
    </Flex>
  );
};

export default GroupJarDashboard;
