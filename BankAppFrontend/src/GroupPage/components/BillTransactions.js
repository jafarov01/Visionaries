import { View, Flex, Text, Avatar, Pressable } from "native-base";
import groupBills from "../../../fakeData/groupBills";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const BillTransaction = () => {
  const navigation = useNavigation();
  const currentData = useSelector((state) => {
    return state.groupBill.currentBillData;
  });

  const addNewBill = () => {
    navigation.navigate('AddBill');
  }

  return (
    <Flex width={"100%"} mt={"15px"}>
      <Flex justifyContent={'space-between'} direction={'row'}>
        <Text color={"#7d7d7d"}>Transactions</Text>
        <Pressable
          borderRadius={"3px"}
          px={"10px"}
          height={"30px"}
          backgroundColor={"#f2f5f7"}
        >
          <Text margin="auto" fontWeight={"600"} color="#2e4369" onPress={addNewBill}>
            Add
          </Text>
        </Pressable>
      </Flex>
      <Flex
        width={"100%"}
        mt={"5px"}
        backgroundColor={"#f2f5f7"}
        borderRadius={"10px"}
      >
        {currentData.transactions && currentData.transactions.map((transaction) => {
          return (
            <Flex
              key={transaction.id}
              width={"95%"}
              margin={"auto"}
              py={"10px"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex direction="row" alignItems={"center"}>
                <Avatar
                  source={{
                    uri: `${transaction.userAvatar}`,
                  }}
                ></Avatar>
                <Flex ml={"10px"}>
                  <Text
                    fontSize={"15px"}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    maxWidth={"160px"}
                    fontWeight={"700"}
                    color={"#2e4369"}
                  >
                    {transaction.description}
                  </Text>
                  <Text color={"#7d7d7d"} fontSize={"12px"}>
                    {transaction.userName}
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Text color={"#2e4369"} fontWeight={"700"}>{transaction.amount}$</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default BillTransaction;
