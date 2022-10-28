import React, {useState} from "react";
import { Flex, Text, Avatar, Pressable, ScrollView } from "native-base";
import contactsList from "../../../fakeData/contactsList";
import { useSelector, useDispatch } from "react-redux";
import { setAddedAccounts } from "../../store/groupBillSlice";

const ContactsSearch = () => {
  const addedAccounts = useSelector((state) => {
    return state.groupBill.addedAccounts;
  });
  const dispatch = useDispatch();

  return (
    <Flex mt={"30px"}>
      <Text color="#7d7d7d">Contacts on Wise</Text>
      <ScrollView
        borderTopWidth={"1px"}
        mt={"10px"}
        borderTopColor={"#7d7d7d"}
        py={"15px"}
        vertical
      >
        {contactsList.map((contact) => {
          return (
            <Flex
              key={contact.name}
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"10px"}
            >
              <Flex direction="row">
                <Avatar
                  source={{
                    uri: `${contact.avatar}`,
                  }}
                ></Avatar>
                <Flex ml="10px">
                  <Text color="#2e4369" fontSize={"15px"} fontWeight={"700"}>
                    {contact.name}
                  </Text>
                  <Text color="#7d7d7d" fontSize={"12px"}>
                    Wise account
                  </Text>
                </Flex>
              </Flex>
              <Pressable
                borderRadius={"3px"}
                px={"10px"}
                height={"30px"}
                backgroundColor={"#e3e5e8"}
                onPress={() => {
                  if (addedAccounts) {
                    if (!addedAccounts.includes(contact)) {
                      dispatch(setAddedAccounts([...addedAccounts, contact]));
                    }
                  } else {
                    dispatch(setAddedAccounts(contact));
                  }
                }}
              >
                <Text margin="auto" fontWeight={"600"} color="#00B9FF">
                  Add
                </Text>
              </Pressable>
            </Flex>
          );
        })}
      </ScrollView>
    </Flex>
  );
};

export default ContactsSearch;
