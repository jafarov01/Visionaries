import { Flex, Text, Avatar, Pressable, Image } from "native-base";
import groupBills from "../../../fakeData/groupBills";
import BillTransaction from "./BillTransactions";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BillInformation = () => {
  const currentBillId = useSelector((state) => {
    return state.groupBill.currentBillID;
  });
  const currentBillData = useSelector((state) => {
    return state.groupBill.currentBillData;
  });
  const navigation = useNavigation();

  const navigateToQRCodeShow = () => {
    navigation.navigate("QRCodeShow");
  };

  return (
    <Flex
      height={"60%"}
      py={"20px"}
      width={"100%"}
      backgroundColor={"#FFFFFF"}
      borderRadius={"20px"}
      alignItems={"center"}
    >
      <Flex width={"90%"}>
        {currentBillId && (
          <Flex direction="row" justifyContent={"space-between"}>
            <Text color={"#2e4369"} fontSize={"24px"} fontWeight={"600"}>
              Group members
            </Text>
            <Pressable onPress={navigateToQRCodeShow}>
              <Avatar
                height={"40px"}
                width={"40px"}
                backgroundColor={"#e3e5e8"}
                source={{
                  uri: "https://static.beaconstac.com/assets/img/navheader_qr_code.png",
                }}
              ></Avatar>
            </Pressable>
          </Flex>
        )}
        {currentBillData && (
          <Flex direction="row" mt={"10px"}>
            {currentBillData.users.map((user) => {
              return (
                <Avatar
                  height={"60px"}
                  width={"60px"}
                  mr={"5px"}
                  key={user.name}
                  source={{
                    uri: `${user.avatar}`,
                  }}
                ></Avatar>
              );
            })}
          </Flex>
        )}
        {currentBillId && <BillTransaction></BillTransaction>}
        {!currentBillId && (
          <Flex>
            <Image
              source={{
                uri: "https://i.hizliresim.com/e5o2lir.png",
              }}
              resizeMode={"center"}
              minWidth={"300px"}
              margin={"auto"}
              alt="Alternate Text"
              size="xl"
            />
            <Text
              color={"#2e4369"}
              fontSize={"20px"}
              fontWeight={"600"}
              margin={"auto"}
            >
              Please select a bill, or create new one.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default BillInformation;
