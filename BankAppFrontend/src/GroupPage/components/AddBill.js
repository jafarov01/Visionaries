import { Flex, Text, Input, Pressable } from "native-base";
import WiseLogoMain from "../../MainPage/components/WiseLogoMain";
import Header from "../../common/Header";

const AddBill = () => {
  return (
    <Flex>
      <Header></Header>
      <Flex width={"90%"} mx={"auto"}>
        <Text color="#2e4369" fontWeight={"700"} fontSize={"28px"}>
          Add bill
        </Text>
        <Input
          mt={"20px"}
          placeholder="Add description"
          height={"40px"}
          variant={"unstyled"}
          width="100%"
          borderWidth="1px"
          borderColor="#e3e5e8"
          py="1"
          px="2"
        />
        <Flex mt={"20px"} direction="row" justifyContent={"space-between"}>
          <Input
            placeholder="Enter the amount"
            height={"40px"}
            variant={"unstyled"}
            width="49%"
            borderWidth="1px"
            borderColor="#e3e5e8"
            py="1"
            px="2"
          />
          <Pressable
            width={"49%"}
            height={"40px"}
            borderRadius={"5px"}
            backgroundColor={"#e3e5e8"}
          >
            <Text color={"#00B9FF"} margin="auto" fontWeight={"600"}>
              Add
            </Text>
          </Pressable>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddBill;
