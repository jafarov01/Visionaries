import { Center, Flex, ScrollView } from "native-base";
import WiseLogoMain from "../components/WiseLogoMain";
import GroupBillsPreview from "../components/GroupBillsPreview";
import Currency from "../components/Currency"; 
import GroupJar from "../../GroupJar/components/GroupJar";

const MainPageScreen = () => {
  return (
    <Flex width={"100%"} height={"100%"}>
      <WiseLogoMain/> 
      <Currency></Currency>
      <ScrollView height={"60%"} showsVerticalScrollIndicator={false}>
        <GroupBillsPreview/>
        <GroupJar/>
      </ScrollView>
    </Flex>
  );
};

export default MainPageScreen;
