import React, { useState } from "react";
import { Flex, Text, Input, Pressable, Avatar } from "native-base";
import WiseLogoMain from "../../MainPage/components/WiseLogoMain";
import ContactsSearch from "./ContactsSearch";
import Header from "../../common/Header";
import { useSelector, useDispatch } from "react-redux";
import groupBills from "../../../fakeData/groupBills";
import { useNavigation } from "@react-navigation/native";
import { setAllData, setAddedAccounts } from "../../store/groupBillSlice";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const addedAccounts = useSelector((state) => {
    return state.groupBill.addedAccounts;
  });
  const allData = useSelector((state) => {
    return state.groupBill.allData;
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const createHandler = () => {
    if (addedAccounts.length == 0) {
      setErrorMessage("Please add minimum one recepient!");
    } else if (!groupName) {
      setErrorMessage("Please enter group's name!");
    } else {
      groupBills = [].push({
        id: Math.random() * 10,
        title: groupName,
        avatar:
          "https://media.vogue.fr/photos/5d51422c5dc6c20009ca8833/4:3/w_2426,h_1820,c_limit/010_A7A08B18_317.jpg",
        amount: 0,
        currency: "USD",
        users: addedAccounts,
        transactions: [],
      });
      navigation.goBack();
      dispatch(setAddedAccounts([]))
      dispatch(setAllData(groupBills));
    }
  };

  return (
    <Flex>
      <Header></Header>
      <Flex width={"90%"} mx={"auto"}>
        <Text color="#2e4369" fontWeight={"700"} fontSize={"28px"}>
          Create group
        </Text>
        {errorMessage && (
          <Text color="#85130b" fontWeight={"700"} fontSize={"15px"}>
            {errorMessage}
          </Text>
        )}
        <Flex mt={"20px"}>
          <Flex
            direction="row"
            height={"40px"}
            justifyContent={"space-between"}
          >
            <Input
              onChangeText={(text) => {
                setGroupName(text);
              }}
              placeholder="Enter group name"
              height={"40px"}
              variant={"unstyled"}
              width="70%"
              borderWidth="1px"
              borderColor="#e3e5e8"
              py="1"
              px="2"
            />
            <Pressable
              width={"25%"}
              height={"40px"}
              borderRadius={"5px"}
              backgroundColor={"#e3e5e8"}
              onPress={createHandler}
            >
              <Text color={"#00B9FF"} margin="auto" fontWeight={"600"}>
                Create
              </Text>
            </Pressable>
          </Flex>
          <Input
            mt="20px"
            placeholder="Search for recipient"
            variant={"unstyled"}
            width="100%"
            height={"40px"}
            borderWidth="1px"
            borderColor="#e3e5e8"
            py="1"
            px="2"
          />
        </Flex>
        <Flex mt={"10px"} maxHeight={"70px"} direction="row">
          {addedAccounts.length > 0 &&
            addedAccounts.map((account) => {
              return (
                <Avatar
                  key={account.id}
                  ml={"5px"}
                  source={{ uri: `${account.avatar}` }}
                ></Avatar>
              );
            })}
        </Flex>
        <ContactsSearch></ContactsSearch>
      </Flex>
    </Flex>
  );
};

export default CreateGroup;
