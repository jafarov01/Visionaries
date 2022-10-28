import { Center, Flex, Avatar, Text } from "native-base";
import { useSelector } from "react-redux";
import Header from "../../common/Header";

const QRCodeShow = () => {
  const currentData = useSelector((state) => {
    return state.groupBill.currentBillData;
  });
  return (
    <Flex>
      <Header></Header>
      <Center height={"100%"} width={"100%"}>
        <Center
          margin={"auto"}
          height={"300px"}
          width={"300px"}
          backgroundColor="#e3e5e8"
          borderRadius={"10px"}
        >
          <Flex>
            <Flex>
              <Text fontSize={"18px"} textAlign={"center"} fontWeight={"700"}>
                {currentData.title}
              </Text>
              <Text color="#7d7d7d" textAlign={"center"} fontSize={"12px"}>
                Scan to join the group bill!
              </Text>
            </Flex>
            <Avatar
              height={"150px"}
              width={"150px"}
              margin={"auto"}
              borderRadius={"0"}
              backgroundColor="#e3e5e8"
              source={{
                uri: "https://i.hizliresim.com/kzbaj4n.png",
              }}
            ></Avatar>
          </Flex>
        </Center>
      </Center>
    </Flex>
  );
};

export default QRCodeShow;
