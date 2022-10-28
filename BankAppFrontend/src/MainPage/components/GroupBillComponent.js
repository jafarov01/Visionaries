import { Flex, Text, Avatar, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setBillId, setCurrentBill } from "../../store/groupBillSlice";

const GroupBillComponent = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateHandler = () => {
    navigation.navigate("GroupPageMain");
    dispatch(setBillId(props.id));
    dispatch(setCurrentBill(props.data))
  };

  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={"8px"}
      backgroundColor={"#e3e5e8"}
      minHeight={"80px"}
      direction={"row"}
      px={"10px"}
      mt={"5px"}
    >
      <Avatar
        source={{
          uri: `${props.avatarURL}`,
        }}
      ></Avatar>
      <Flex ml="10px" height={"50px"} width={"75%"}>
        <Text fontWeight={"600"} fontSize="17px">
          {props.title}
        </Text>
        {props.amount >= 0 && (
          <Text fontWeight={"600"} color={"#1e8f3b"}>
            You are owed: {props.amount}$
          </Text>
        )}
        {props.amount < 0 && (
          <Text fontWeight={"600"} color={"#85130b"}>
            You owe: {Math.abs(props.amount)}$
          </Text>
        )}
      </Flex>
      <Pressable onPress={navigateHandler}>
        <Text color={"#00B9FF"}>View</Text>
      </Pressable>
    </Flex>
  );
};

export default GroupBillComponent;
