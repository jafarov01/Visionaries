import { Flex, Pressable, Text } from "native-base";
import groupBills from "../../../fakeData/groupBills";
import GroupsScroll from "./GroupsScroll";
import { useNavigation } from '@react-navigation/native';

const GroupDashboard = () => {
  const navigation = useNavigation();

  const navigateToQR = () => {
    navigation.navigate('QR');
  }
  const navigateToCreate = () => {
    navigation.navigate('CreateGroup')
  }

  return (
    <Flex direction="row" mt={"20px"} height={'100%'} width={'100%'} >
      <Flex
        height={"160px"}
        width={"35%"}
        justifyContent={'space-between'}
      >
        <Text
          fontSize={"18px"}
          color={"#2e4369"}
          fontWeight={"700"}
          textAlign={"center"}
          margin={'0px'}
        >
          Your groups · {groupBills.length}
        </Text>
        <Pressable
          height={"60px"}
          borderRadius={"5px"}
          py={"5px"}
          px={"10px"}
          backgroundColor={"#e3e5e8"}
          onPress = {navigateToQR}
        >
          <Text
            fontSize={"15px"}
            color={"#2e4369"}
            fontWeight={'bold'}
            margin={"auto"}
            textAlign={"center"}
          >
            Scan QR code
          </Text>
        </Pressable>
        <Pressable
          height={"60px"}
          borderRadius={"5px"}
          py={"5px"}
          px={"10px"}
          backgroundColor={"#e3e5e8"}
        >
          <Text
            fontSize={"15px"}
            fontWeight={'bold'}
            color={"#2e4369"}
            margin={"auto"}
            textAlign={"center"}
            onPress={navigateToCreate}
          >
            Create group
          </Text>
        </Pressable>
      </Flex>
      <GroupsScroll></GroupsScroll>
    </Flex>
  );
};

export default GroupDashboard;
