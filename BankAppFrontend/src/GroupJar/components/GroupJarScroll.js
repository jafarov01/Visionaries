import { Text, Avatar, Flex, ScrollView, View } from "native-base";
import groupJar from "../../../fakeData/groupJar";

const GroupJarScroll = () => {
  return (
    <ScrollView
      ml={"10px"}
      width={"60%"}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {groupJar.map(x => {
        return (
          <Flex
            key={x.id}
            ml={"5px"}
            height={"100%"}
            width={"160px"}
            maxWidth={"160px"}
            backgroundColor={"#e3e5e8"}
            borderRadius={"10px"}
            padding={"10px"}
            justifyContent={"space-between"}
          >
            <Avatar
              source={{
                uri: `${x.avatar}`,
              }}
            ></Avatar>
            <View>
              <Text fontWeight={"bold"} color={"#2e4369"} fontSize={"18px"}>
                {x.name}
              </Text>
                <View>
                  <Text fontWeight={"600"} color={"#2e4369"}>
                    Balance:
                  </Text>
                  <Text color={"#1e8f3b"}>{x.value}$</Text>
                </View>
            </View>
          </Flex>
        );
      })}
    </ScrollView>
  );
};

export default GroupJarScroll;
