import { Text, Avatar, Flex, ScrollView, View, Pressable } from "native-base";
import groupBills from "../../../fakeData/groupBills";
import { setCurrentBill, setBillId } from "../../store/groupBillSlice";
import { useDispatch, useSelector } from "react-redux";

const GroupsScroll = () => {
  const dispatch = useDispatch();
  const currentData = useSelector((state) => {
    return state.groupBill.currentBillData;
  });

  return (
    <ScrollView
      ml={"10px"}
      width={"60%"}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {groupBills.map((group) => {
        return (
          <Pressable
            key={group.id}
            onPress={() => {
              dispatch(setBillId(group.id));
              dispatch(setCurrentBill(group));
              console.log(currentData);
            }}
          >
            <Flex
              ml={"5px"}
              height={"100%"}
              width={"160px"}
              maxWidth={"160px"}
              backgroundColor={"#e3e5e8"}
              borderRadius={"10px"}
              padding={"10px"}
              justifyContent={"space-between"}
            >
              <Flex
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Avatar
                  source={{
                    uri: `${group.avatar}`,
                  }}
                ></Avatar>
              </Flex>
              <View>
                <Text fontWeight={"bold"} color={"#2e4369"} fontSize={"18px"}>
                  {group.title}
                </Text>
                {group.amount >= 0 && (
                  <View>
                    <Text fontWeight={"600"} color={"#2e4369"}>
                      You are owed:
                    </Text>
                    <Text color={"#1e8f3b"}>{group.amount}$</Text>
                  </View>
                )}
                {group.amount < 0 && (
                  <View>
                    <Text fontWeight={"600"} color={"#2e4369"}>
                      You owe: {Math.abs(group.amount)}$
                    </Text>
                    <Text color={"#85130b"}>{group.amount}$</Text>
                  </View>
                )}
              </View>
            </Flex>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default GroupsScroll;
