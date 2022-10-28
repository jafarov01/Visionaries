import { Flex, Text } from "native-base";
import WiseLogoMain from "../../MainPage/components/WiseLogoMain";
import GroupDashboard from "../components/GroupDashboard";
import BillInformation from "../components/BillInformation";
import Header from "../../common/Header";

const GroupPageMain = () => {
  return (
    <Flex height={"100%"} width={"100%"} justifyContent={'space-between'}>
      <Flex>
        <Header></Header>
        <Flex width={"95%"} ml={"auto"}>
          <Text color="#2e4369" fontWeight={"700"} fontSize={"28px"}>
            Group bills
          </Text>
          <Flex height="160px" width={"100%"}>
            <GroupDashboard></GroupDashboard>
          </Flex>
        </Flex>
      </Flex>
      <BillInformation></BillInformation>
    </Flex>
  );
};

export default GroupPageMain;
