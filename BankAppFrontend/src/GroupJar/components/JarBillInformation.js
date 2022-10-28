import { View, Flex, Text, Avatar, FlatList, ScrollView } from "native-base";
import groupJar from "../../../fakeData/groupJar";
import JarTransactions from "./JarTransactions";

const JarBillInformation = () =>
{

    return (
        <ScrollView>

        <Flex
      height={"50%"}
      py={"20px"}
      width={"100%"}
      backgroundColor={"#FFFFFF"}
      borderRadius={"20px"}
      alignItems={"center"}
    >
      <Flex width={"90%"}>
        <Text color={"#2e4369"} fontSize={"24px"} fontWeight={"600"}>
          Who's sharing the jar
        </Text>
        <Flex direction="row" mt={"10px"}>
          {groupJar.map((x) => {
            return (
              <Avatar
                height={"60px"}
                width={"60px"}
                mr={"5px"}
                key={x.name}
                source={{
                  uri: `${x.avatar}`,
                }}
              ></Avatar>
            );
          })}
        </Flex>
        <JarTransactions/>
      </Flex>
    </Flex>
        </ScrollView>
    );
}

export default JarBillInformation;