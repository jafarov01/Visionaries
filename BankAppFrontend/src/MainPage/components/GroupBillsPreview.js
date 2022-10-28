import { Flex, Text, Pressable } from "native-base";
import GroupBillComponent from "./GroupBillComponent";
import groupBills from "../../../fakeData/groupBills";
import SeeAll from "./SeeAll";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const GroupBillsPreview = () => {
  const navigation = useNavigation();
  const stateGroupBills = useSelector((state) => {return state.groupBill.allData})
  const navigateToCreate = () => {
    navigation.navigate('CreateGroup')
  }

  return (
    <Flex width={"100%"} mt={"15px"} alignItems={"center"}>
      <Flex width={"95%"}>
        <Flex
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex>
            <Text color={"#2e4369"} fontSize={"24px"} fontWeight={"700"}>
              Group Bills
            </Text>
            <Text color={"#2e4369"} fontSize={"13px"} fontWeight={"500"}>
              There is no group bill found.
            </Text>
          </Flex>
          <Flex>
            {stateGroupBills.length > 0 && <SeeAll></SeeAll>}
            {!stateGroupBills.length && (
              <Pressable
                borderRadius={"5px"}
                py={"5px"}
                px={"10px"}
                backgroundColor={"#e3e5e8"}
                onPress={navigateToCreate}
              >
                <Text fontWeight={"600"} color={"#00B9FF"}>
                  Create
                </Text>
              </Pressable>
            )}
          </Flex>
        </Flex>
        {stateGroupBills.length > 0 &&
          stateGroupBills.map((group) => {
            return (
              <GroupBillComponent
                key={group.id}
                id={group.id}
                data={group}
                amount={group.amount}
                avatarURL={group.avatar}
                title={group.title}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export default GroupBillsPreview;
