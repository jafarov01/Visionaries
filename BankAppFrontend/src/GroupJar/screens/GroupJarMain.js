import { Flex, Text } from "native-base";
import WiseLogoMain from "../../MainPage/components/WiseLogoMain";
import GroupJarDashboard from "../components/GroupJarDashboard";
import JarBillInformation from "../components/JarBillInformation";
import Header from "../../common/Header";

const GroupJarMain = () => {


  return (
    <Flex height={"100%"} width={"100%"} justifyContent={"space-between"}>
      <Flex>
        <Header></Header>
        <Flex width={"95%"} ml={"auto"}>
          <Text color="#2e4369" fontWeight={"700"} fontSize={"28px"}>
            Group Jars
          </Text>
          <Flex height="160px" width={"100%"}>
            <GroupJarDashboard></GroupJarDashboard>
          </Flex>
        </Flex>
      </Flex>
      <JarBillInformation/>
    </Flex>
  );
};

export default GroupJarMain;
